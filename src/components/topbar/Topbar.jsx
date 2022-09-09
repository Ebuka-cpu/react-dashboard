import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { GridSearchIcon } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import { useState } from "react";

const Topbar = () => {
  const user = useSelector((state) => state.user);
  
  console.log(user.img+ 'g')
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">Jupiter_felix</span>
        </div>
        <div className="topbarcenter">
          <GridSearchIcon className="topbarSearchIcon" />
          <input type="text" className="topbarSearch" placeholder="Search" />
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={user.img} alt="" className="topAvartar" /> 

          <div className="topbarDetails">
            <span className="topbarname">{user.username}</span>
            <span className="topbarEmail">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
