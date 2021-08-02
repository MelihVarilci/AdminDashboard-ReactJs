import React from "react";
import {
  NotificationsNone,
  Language,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./Topbar.css";

export default function Topbar({ Logout }) {
  const history = useHistory();

  const handleLogout = () => {
    Logout();
    setTimeout(() => {
      history.push(`/`);
    }, 500);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">melih</span>
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
          <div className="topbarIconContainer">
            <ExitToApp onClick={handleLogout} />
          </div>
          <img
            src="https://images.pexels.com/photos/8968879/pexels-photo-8968879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
