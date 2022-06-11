import React, { FC } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { getFormattedDate } from 'src/lib/util';
import { numberOfUsers } from 'src/static/data';

const Component: FC = () => {
  return (
    <LineChart
      width={730}
      height={250}
      data={numberOfUsers}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid />
      <XAxis
        domain={['dataMin', 'dataMax']}
        dataKey='unixTime'
        tickFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy-MM-dd')}
        type='number'
      />
      <YAxis />
      <Tooltip
        labelFormatter={(unixTime) => getFormattedDate(new Date(unixTime), 'yyyy-MM-dd hh時mm分')}
      />
      <Line dot={false} strokeWidth={3} type='monotone' dataKey='count' stroke='#82ca9d' />
    </LineChart>
  );
};

export default Component;
