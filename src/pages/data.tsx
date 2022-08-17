import type { GetStaticProps, NextPage } from 'next';
import { StaticDataProvider } from 'src/components/providers/static-data';
import { fetchJsdelivr, fetchKintoneActiveUser, fetchKintoneUserSummary } from 'src/lib/external';
import Page from 'src/components/pages/data';
import { getFormattedDate } from 'src/lib/util';

type StaticProps = {
  kintoneGraphData: website.graphData.KintoneUser[] | null;
  jsdelivrData:
    | {
        repository: string;
        data: external.jsdelivr.Stats;
      }[]
    | null;
  lastModified: string;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const [kintoneUserSummaryResult, kintoneActiveUserResult, jsdelivrResult] =
    await Promise.allSettled([
      fetchKintoneUserSummary(),
      fetchKintoneActiveUser(),
      fetchJsdelivr(),
    ]);

  const kintoneUserSummary =
    kintoneUserSummaryResult.status === 'fulfilled' ? kintoneUserSummaryResult.value : null;
  const kintoneActiveUser =
    kintoneActiveUserResult.status === 'fulfilled' ? kintoneActiveUserResult.value : null;

  const jsdelivrData = jsdelivrResult.status === 'fulfilled' ? jsdelivrResult.value : null;

  let kintoneGraphData: website.graphData.KintoneUser[] = [];
  if (kintoneUserSummary && kintoneActiveUser) {
    kintoneGraphData = Object.entries(kintoneUserSummary).map(([date, summary]) => {
      return {
        unixTime: summary.unixTime * 1000,
        dl: summary.numUsers,
        mau: kintoneActiveUser?.mau[date]?.count ?? null,
        wau: kintoneActiveUser?.wau[date]?.count ?? null,
        activeRate: (kintoneActiveUser?.mau[date]?.count || 0) / summary.numUsers,
        counter: summary.counter,
      };
    });
  }

  const us = new Date();
  us.setHours(us.getHours() + 9);

  const lastModified = getFormattedDate(us, 'M月d日');

  return {
    props: { kintoneGraphData, jsdelivrData, lastModified },
    revalidate: 6 * 60 * 60,
  };
};

const DashboardRoot: NextPage<StaticProps> = (props) => (
  <StaticDataProvider initialValue={props}>
    <Page />
  </StaticDataProvider>
);

export default DashboardRoot;
