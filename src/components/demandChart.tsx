import { CartesianGrid, createHorizontalChart, Legend, Line, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import data1 from '../mockData/data.json';


type DemandData = (typeof data1.data)[number];
const data: DemandData[] = data1.data;

const overload = 200
const threshold = 160
const Typed = createHorizontalChart<DemandData, string, number>()({ XAxis, YAxis, Tooltip, Line, ReferenceLine });

export default function DemandChart() {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid horizontal vertical stroke="#cbd5e1" strokeDasharray="3 3" />
      <Typed.XAxis dataKey="label" interval={0} minTickGap={0} tickMargin={8} angle={-45} height={60} textAnchor="end" />
      <Typed.YAxis width="auto" />
      <Tooltip />
      <Legend />
      
      <Typed.ReferenceLine y={overload} stroke="red" label={{ value: 'overload', fill: 'red', position: 'insideTopLeft' }} />
      <Typed.ReferenceLine y={threshold} stroke="orange" label={{ value: 'threshold', fill: 'orange', position: 'insideTopLeft' }} />
      <Typed.Line type="monotone" dataKey="x" name="Projected" />
      <Typed.Line type="monotone" dataKey="y" name="Actual" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}