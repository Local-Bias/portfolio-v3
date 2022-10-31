import React, { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useStaticData } from 'src/components/providers/static-data';
import { getFormattedDate } from 'src/lib/util';

const Component: FC = () => {
  const { kintoneGraphData } = useStaticData();

  if (!kintoneGraphData) {
    return <div>データの取得に失敗しました</div>;
  }

  return (
    <ResponsiveContainer width='100%' height={350}>
      <LineChart data={kintoneGraphData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid />
        <XAxis
          domain={['dataMin', 'dataMax']}
          dataKey='unixTime'
          tickCount={6}
          tickMargin={12}
          tickFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy-MM-dd')}
          type='number'
        />
        <YAxis yAxisId={1} tickFormatter={(tick) => `${tick}社`} />
        <YAxis yAxisId={2} orientation='right' tickFormatter={(tick) => `${tick}社`} />
        <Tooltip
          /**@ts-ignore */
          formatter={(value: number, name: string, props: any) => {
            const dataKey = props.dataKey as keyof website.graphData.KintoneUser;

            let label: string = dataKey;
            if (dataKey === 'dl') {
              label = '導入企業数';
            } else if (dataKey === 'mau') {
              label = 'MAU';
            }
            return [value && !isNaN(Number(value)) ? `${value.toLocaleString()}社` : value, label];
          }}
          labelFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy年M月d日')}
        />

        <Line yAxisId={1} dot={false} strokeWidth={2} dataKey='dl' stroke='#00b6cb' />
        <Line yAxisId={2} dot={false} strokeWidth={2} dataKey='mau' stroke='#fea78c' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Component;
