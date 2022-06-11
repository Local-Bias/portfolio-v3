import type { GetStaticProps, NextPage } from 'next';
import { IndicatorProvider } from 'src/components/providers/indicator';
import { fetchKintonePluginIndicator } from 'src/lib/external';
import Page from 'src/components/pages/data';
import { getFormattedDate } from 'src/lib/util';

type StaticProps = { indicator: external.Indicator | null; lastModified: string };

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const indicator = await fetchKintonePluginIndicator();

  const us = new Date();
  us.setHours(us.getHours() + 9);

  const lastModified = getFormattedDate(us, 'M月d日 h時m分');

  return {
    props: { indicator, lastModified },
    revalidate: 10 * 60,
  };
};

const DashboardRoot: NextPage<StaticProps> = ({ indicator, lastModified }) => (
  <IndicatorProvider initialValue={{ indicator, lastModified }}>
    <Page />
  </IndicatorProvider>
);

export default DashboardRoot;
