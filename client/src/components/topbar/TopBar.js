import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
  
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">motivation app</span>
        </div>
        <div className="topRight">
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
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-marketing-color%2F64%2Fpersonal-branding-motivation-passion-success-confident-512.png&f=1&nofb=1&ipt=37edb1024346ae408128fd4fe576f0a46938436a84b5c5434d0be12d9559b054&ipo=images" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  
  );
}
