import { get, ref } from 'firebase/database';
import { rtdb } from './firebase/rdtb';

export const fetchKintonePluginIndicator = async (): Promise<external.Indicator | null> => {
  if (!process.env.KINTONE_PLUGIN_INDICATOR_END_POINT) {
    return null;
  }

  const response = await fetch(process.env.KINTONE_PLUGIN_INDICATOR_END_POINT);

  const data: Partial<external.Indicator> = await response.json();

  const indicators: external.Indicator = {
    numUsers: data.numUsers || 0,
    counter: data.counter || 0,
  };

  return indicators;
};

export const fetchKintoneUserSummary = async (): Promise<
  website.graphData.KintoneUser[] | null
> => {
  const summaryRef = ref(rtdb, 'kintone/summary');

  const snapshot = await get(summaryRef);

  if (!snapshot.exists()) {
    return null;
  }

  const summary: external.kintone.Summary = snapshot.val();

  const graphData = Object.values(summary).map<website.graphData.KintoneUser>((row) => ({
    unixTime: row.unixTime * 1000,
    count: row.numUsers,
  }));

  return graphData;
};
