import { get, ref } from 'firebase/database';
import { DateTime } from 'luxon';
import { rtdb } from './firebase/rdtb';

export const fetchKintoneUserSummary = async (): Promise<external.kintone.Summary | null> => {
  const summaryRef = ref(rtdb, 'kintone/summary');

  const snapshot = await get(summaryRef);

  if (!snapshot.exists()) {
    return null;
  }

  const summary: external.kintone.Summary = snapshot.val();

  return summary;
};

export const fetchKintoneActiveUser = async (): Promise<{
  mau: Record<string, website.graphData.Material>;
  wau: Record<string, website.graphData.Material>;
} | null> => {
  const installDateRef = ref(rtdb, 'kintone/installDate');
  const lastModifiedRef = ref(rtdb, 'kintone/lastModified');

  const installDateSnapshot = await get(installDateRef);
  const lastModifiedSnapshot = await get(lastModifiedRef);

  if (!installDateSnapshot.exists() || !lastModifiedSnapshot.exists()) {
    return null;
  }

  const installDate: Record<string, string> = installDateSnapshot.val();
  const lastModified: Record<string, string> = lastModifiedSnapshot.val();

  let date = DateTime.local(2022, 2, 18);
  let now = DateTime.local().plus({ hours: 9 });

  const user = Object.entries(installDate).map(([domain, date]) => {
    return {
      installDate: DateTime.fromISO(date),
      lastModified: DateTime.fromISO(lastModified[domain]) || null,
    };
  });

  const correctData = user.filter(({ lastModified }) => !!lastModified) as {
    installDate: DateTime;
    lastModified: DateTime;
  }[];

  const mau: Record<string, website.graphData.Material> = {};
  const wau: Record<string, website.graphData.Material> = {};

  let loopIndex = 0;
  while (now > date) {
    const monthly = correctData.filter(
      ({ installDate, lastModified }) =>
        date > installDate && date.minus({ days: 28 }) < lastModified
    );

    const weekly = correctData.filter(
      ({ installDate, lastModified }) =>
        date > installDate && date.minus({ days: 7 }) < lastModified
    );

    mau[date.toISODate()] = {
      unixTime: date.toUnixInteger() * 1000,
      count: monthly.length,
    };
    wau[date.toISODate()] = {
      unixTime: date.toUnixInteger() * 1000,
      count: weekly.length,
    };

    date = date.plus({ days: 1 });
    loopIndex++;
    if (loopIndex > 30000) {
      break;
    }
  }

  return { mau, wau };
};

export const fetchJsdelivr = async () => {
  const repositories = [
    'kintone-plugin-smart-view',
    'kintone-plugin-tab',
    'kintone-plugin-unrelated-lookup',
    'kintone-plugin-lookup-myself',
    'kintone-plugin-xlsx',
    'kintone-plugin-slider',
    'kintone-plugin-simply-copy',
    'kintone-plugin-age',
    'kintone-plugin-calendar',
    'kintone-plugin-tooltip',
    'kintone-plugin-editable',
  ];

  const responses = await Promise.allSettled(
    repositories.map((repository) =>
      fetch(`https://data.jsdelivr.com/v1/package/gh/local-bias/${repository}/stats`)
    )
  );

  let results: {
    repository: string;
    data: external.jsdelivr.Stats;
  }[] = [];
  responses.forEach(async (response, i) => {
    if (response.status !== 'fulfilled') {
      return;
    }
    results.push({ repository: repositories[i], data: await response.value.json() });
  });

  return results;
};
