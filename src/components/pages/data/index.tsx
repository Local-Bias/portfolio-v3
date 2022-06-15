import Head from 'next/head';
import React, { FC, Suspense } from 'react';
import { useStaticData } from 'src/components/providers/static-data';
import { meta } from 'src/static/site-config';
import KintoneUserChart from './chart';

const TITLE = `数字で知るRibbit`;

const UserData: FC = () => {
  const { kintoneGraphData } = useStaticData();

  if (!kintoneGraphData) {
    return <div>利用者情報の取得に失敗しました</div>;
  }

  const latestData = kintoneGraphData[kintoneGraphData.length - 1];

  return (
    <section>
      <h2>kintoneプラグインの利用者情報</h2>
      <p>オープンソースで公開しているkintoneプラグインの利用状況です。</p>
      <section>
        <h3>利用法人数</h3>
        <p>
          今まで{latestData.total.toLocaleString()}社に導入いただき、現在も
          {latestData.active.toLocaleString()}
          社にご利用いただいています。
        </p>
        <Suspense fallback={<p>Loading...</p>}>
          <KintoneUserChart />
        </Suspense>
        <p className='text-slate-600 text-right'>
          <small>
            (アクティブユーザー数は、過去28日の間で1度でも実行されたユーザー数から算出しています)
          </small>
        </p>
      </section>
      <section>
        <h3>実行回数</h3>
        <p>プラグインがCDN経由で{latestData.counter.toLocaleString()}回呼び出されました。</p>
      </section>
    </section>
  );
};

const Component: FC = () => (
  <>
    <Head>
      <title>
        {TITLE} | {meta.title}
      </title>
    </Head>
    <article className='px-4 py-8 md:py-16'>
      <div className='flex justify-center'>
        <img src='/img/presentation.webp' alt='プレゼンする人' width={200} height={200} />
      </div>
      <h1 className='mt-8'>{TITLE}</h1>
      <section></section>
      <UserData />
      <section>
        <h2>Googleデータポータル</h2>
        <p>Google Analyticsを使って収集した、私が開発した各サイトの利用状況です。</p>
        <iframe
          width='768'
          height='768'
          src='https://datastudio.google.com/embed/reporting/faefc4c0-01ce-4748-982b-229742cc408d/page/GpNpC'
          style={{ border: '0', width: '100%' }}
          allowFullScreen
        ></iframe>
      </section>
    </article>
  </>
);

const Container: FC = () => {
  return <Component />;
};

export default Component;
