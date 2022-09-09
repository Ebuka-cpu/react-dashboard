import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredinfo.css"

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$50,362</span>
            <span className="featuredMoneyRate">
              -16.8
              <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$40,362</span>
            <span className="featuredMoneyRate">
              -5.8
              <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$12,362</span>
            <span className="featuredMoneyRate">
              2.8
              <ArrowUpward className="featuredIcon"/>
            </span>
        </div>
        <span className="featuredSub">
          Compared to last month
        </span>
      </div>
    </div>
  )
}

export default FeaturedInfo