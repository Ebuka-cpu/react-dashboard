import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./home.css"
import {data} from "../../data"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

const Home = () => {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={data} title="Sales Analytics" dataKey1="uv" dataKey2="pv" grid/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home