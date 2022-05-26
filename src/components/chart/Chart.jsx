import './chart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Tooltip } from '@mui/material';

const data = [
  { name: 'January', Total: 1200, },
  { name: 'February', Total: 2100, },
  { name: 'March', Total: 800, },
  { name: 'April', Total: 1600, },
  { name: 'May', Total: 900, },
  { name: 'June', Total: 1700, },
];


const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={ 2 / 1 }>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="total" >
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart