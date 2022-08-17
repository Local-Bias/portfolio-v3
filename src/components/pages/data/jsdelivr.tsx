import Head from 'next/head';
import React, { FC } from 'react';
import { useStaticData } from 'src/components/providers/static-data';

const Component: FC = () => {
  const { jsdelivrData } = useStaticData();

  if (!jsdelivrData) {
    return <div>jsdelivrからデータを取得できませんでした</div>;
  }

  const sorted = jsdelivrData.sort((a, b) => {
    return b.data.total - a.data.total;
  });

  return (
    <section>
      <h3>実行回数</h3>

      <table className='w-full'>
        <thead>
          <tr className='border-b'>
            <th className='py-2'>リポジトリ名</th>
            <th>月あたりの実行回数</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(({ data, repository }, i) => (
            <tr key={i} className='border-b'>
              <th className='text-left py-1 px-2'>
                <a href={`https://github.com/local-bias/${repository}`} target='_brank'>
                  {repository}
                </a>
              </th>
              <td className='text-right'>
                {data.total.toLocaleString()}/<small>月</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const Container: FC = () => {
  return <Component />;
};

export default Container;
