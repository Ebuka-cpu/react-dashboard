import "./chart2.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart2 = () => {
    const data = [
        {
          name: 'Jan',
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          sales: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          uv: 4000,
          sales: 6300,
          amt: 3100,
        },
      ];
    
  return (
    <div className="chart2">
        <h3 className="chart2Analysis">Analysis for the year</h3>
        <ResponsiveContainer width="100%" aspect={3/1}>
        <BarChart width={500} height={300} data={data} barSize={20}>
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#8884d8" background={{ fill: '#eee' }} />
          
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart2