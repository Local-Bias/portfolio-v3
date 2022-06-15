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
    <ResponsiveContainer width='100%' height={250}>
      <LineChart data={kintoneGraphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid />
        <XAxis
          domain={['dataMin', 'dataMax']}
          dataKey='unixTime'
          tickFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy-MM-dd')}
          type='number'
        />
        <YAxis />
        <Tooltip
          labelFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy年M月d日')}
        />
        <Line dot={false} strokeWidth={3} type='monotone' dataKey='total' stroke='#00b6cb' />
        <Line dot={false} strokeWidth={3} type='monotone' dataKey='active' stroke='#4dccdb' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Component;
