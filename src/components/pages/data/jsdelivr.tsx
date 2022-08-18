import React, { FC } from 'react';
import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

const Achievement: FC<{ repository: string }> = ({ repository }) => {
  const { data, error } = useSWR<external.jsdelivr.Stats>(
    `https://data.jsdelivr.com/v1/package/gh/local-bias/${repository}/stats`,
    fetcher
  );

  return (
    <div className='flex justify-between'>
      <div>
        <a href={`https://github.com/local-bias/${repository}`} target='_brank'>
          {repository}
        </a>
      </div>
      {data ? (
        <div>
          {data.total.toLocaleString()}/<small>月</small>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

const Component: FC = () => {
  return (
    <section>
      <h3>実行回数</h3>

      <div className='flex flex-col gap-3'>
        <div className='flex justify-between py-3 border-b'>
          <strong>リポジトリ名</strong>
          <strong>月あたりの実行回数</strong>
        </div>
        {[
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
        ].map((repository) => (
          <Achievement key={repository} repository={repository} />
        ))}
      </div>
    </section>
  );
};

const Container: FC = () => {
  return <Component />;
};

export default Container;
