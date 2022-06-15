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
        <YAxis />
        <Tooltip
          formatter={(value: number, name: string, props: any) => [
            `${!isNaN(Number(value)) ? Number(value).toLocaleString() : value}社`,
            props.value === props.payload.total ? '導入法人数' : 'アクティブユーザー数',
          ]}
          labelFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy年M月d日')}
        />

        <Line dot={false} strokeWidth={3} type='monotone' dataKey='total' stroke='#00b6cb' />
        <Line dot={false} strokeWidth={3} type='monotone' dataKey='active' stroke='#4dccdb' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Component;
