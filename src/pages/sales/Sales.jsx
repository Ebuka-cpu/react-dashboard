import "./sales.css"
import {Link} from "react-router-dom"
import Chart from "../../components/chart/Chart"
import {productData} from "../../data"

const Sales = () => {
  return (
    <div className="sales">
        <div className="salesTitleContainer">
            <h1 className="salesTitle">Sales</h1>
        </div>
        <div>
            <div className="salesTop">
                <Chart data={productData} dataKey1="sales" dataKey2="name" title="Sales Performance"/>
            </div>
        </div>
        
    </div>
  )
}

export default Sales