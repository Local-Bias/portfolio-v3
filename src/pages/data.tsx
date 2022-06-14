import type { GetStaticProps, NextPage } from 'next';
import { StaticDataProvider } from 'src/components/providers/static-data';
import { fetchKintonePluginIndicator, fetchKintoneUserSummary } from 'src/lib/external';
import Page from 'src/components/pages/data';
import { getFormattedDate } from 'src/lib/util';

type StaticProps = {
  indicator: external.Indicator | null;
  kintoneUserSummary: website.graphData.KintoneUser[] | null;
  lastModified: string;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const [indicatorResult, kintoneUserSummaryResult] = await Promise.allSettled([
    fetchKintonePluginIndicator(),
    fetchKintoneUserSummary(),
  ]);

  const indicator = indicatorResult.status === 'fulfilled' ? indicatorResult.value : null;
  const kintoneUserSummary =
    kintoneUserSummaryResult.status === 'fulfilled' ? kintoneUserSummaryResult.value : null;

  const us = new Date();
  us.setHours(us.getHours() + 9);

  const lastModified = getFormattedDate(us, 'M月d日 h時m分');

  return {
    props: { indicator, kintoneUserSummary, lastModified },
    revalidate: 30 * 60,
  };
};

const DashboardRoot: NextPage<StaticProps> = ({ indicator, kintoneUserSummary, lastModified }) => (
  <StaticDataProvider initialValue={{ indicator, kintoneUserSummary, lastModified }}>
    <Page />
  </StaticDataProvider>
);

export default DashboardRoot;
