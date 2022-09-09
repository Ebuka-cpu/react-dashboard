import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title, data, dataKey1, dataKey2, grid,}) => {

  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer  width="100%" aspect={4/1}>
            <LineChart data={data}>
            { grid &&
            <CartesianGrid stroke="#242636" strokeDasharray="5,5" /> 
            }
            <XAxis dataKey="name" stroke="white" />
            <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
          <Tooltip />
          <Legend />
            </LineChart>
        </ResponsiveContainer>
        
    </div>
    
  )
}

export default Chart