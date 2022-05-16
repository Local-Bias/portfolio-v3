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
