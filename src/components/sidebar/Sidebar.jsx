import "./sidebar.css";
import { AccountCircle, ArrowBack, ArrowForward, Category,  LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import {useState} from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="sidebar" style={{width: isOpen ? "180px" : "70px"}}>
      <div className="sidebarToggle">

        {isOpen ? <span className="sidebarToggleIconBack" onClick={toggle}><ArrowBack/></span> : <span className="sidebarToggleIconForward" onClick={toggle}><ArrowForward/></span> } 
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <NavLink to="/">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              <span style={{display: isOpen ? "block" : "none"}}>Dashboard</span>
            </li>
            </NavLink>
            <NavLink to="/analytics">

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span style={{display: isOpen ? "block" : "none"}}>Analytics</span>
            </li>
            </NavLink>
            <NavLink to="/sales">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <span style={{display: isOpen ? "block" : "none"}}>Sales</span>
            </li>
            </NavLink>
            <NavLink to="/users">
            <li className="sidebarListItem">
              <AccountCircle className="sidebarIcon" />
              <span style={{display: isOpen ? "block" : "none"}}>Users</span>
            </li>
            </NavLink>
            <NavLink to="/products">
            <li className="sidebarListItem">
              <Category className="sidebarIcon" />
              <span style={{display: isOpen ? "block" : "none"}}>products</span>
            </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
