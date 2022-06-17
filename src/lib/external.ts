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
