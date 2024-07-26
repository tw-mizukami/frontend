
// npm install recharts

import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { RunData, RunDataList } from '../runData';

const pStyle = {
  color: 'blue',
};

const divStyle = {
  background: 'linear-gradient(to right, #fff, #fff8)',
  fontWeight: 'bold',
  border: 'solid 2px blue',
};

const RunDataChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h2>運転速度/未検査グラフ</h2>
      <LineChart
        width={670}
        height={300}
        data={RunDataList}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 1" />
        <XAxis
          dataKey="date"
          interval={0}
          angle={-30}
          dx={-10}
          dy={5}
          tick={{
            fontSize: 10,
            fill: '#000',
            cursor: 'pointer',
          }}
        />

        {isClient ? <YAxis yAxisId="left" domain={[0, 'auto']} dataKey="運転速度" tickCount={10} /> : <YAxis yAxisId="left" domain={[0, 'auto']} dataKey="運転速度" />}
        {isClient ? <YAxis yAxisId="right" domain={[0, 'auto']} dataKey="未検査率" tickCount={10} /> : <YAxis yAxisId="right" domain={[0, 'auto']} dataKey="未検査率" />}
        <Line yAxisId="left" type="monotone" dataKey="運転速度" stroke="#3ba2f6" unit="pcs/min" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="未検査率"
          stroke="#ff0092"
          strokeWidth={2}
          unit="%"
          activeDot={{
            cursor: 'pointer',
          }}
        />
        <Legend
          verticalAlign="top"
          height={30}
          iconSize={20}
          iconType="plainline"
        />
        <Tooltip
          contentStyle={divStyle}
          labelStyle={pStyle}
          separator=" "
          cursor={{ stroke: 'blue', strokeWidth: 2 }}
        />
      </LineChart>
    </div>
  );
};

export default RunDataChart;