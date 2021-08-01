import React, { useState } from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const history = useHistory();
  const handleRoute = (e) => {
    setActive(e);
    if (e === "home") {
      history.push(`/`);
    } else {
      history.push(`/${e}`);
    }
  };

  const getClassname = (e) => {
    return active === e ? "sidebarListItem active " : "sidebarListItem";
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li
              className={getClassname("home")}
              onClick={() => handleRoute("home")}
            >
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li
              className={getClassname("analytics")}
              onClick={() => handleRoute("home")}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={getClassname("sales")}
              onClick={() => handleRoute("home")}
            >
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {/* <Link to="/users" className="link"> */}
            <li
              className={getClassname("users")}
              onClick={() => handleRoute("users")}
            >
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            {/* </Link> */}
            <li
              className={getClassname("products")}
              onClick={() => handleRoute("products")}
            >
              <Storefront className="sidebarIcon" />
              Products
            </li>
            <li
              className={getClassname("transactions")}
              onClick={() => handleRoute("home")}
            >
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li
              className={getClassname("reports")}
              onClick={() => handleRoute("home")}
            >
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className={getClassname("mail")}
              onClick={() => handleRoute("home")}
            >
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li
              className={getClassname("feedback")}
              onClick={() => handleRoute("home")}
            >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li
              className={getClassname("messages")}
              onClick={() => handleRoute("home")}
            >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className={getClassname("manage")}
              onClick={() => handleRoute("home")}
            >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li
              className={getClassname("analytics")}
              onClick={() => handleRoute("home")}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={getClassname("reports")}
              onClick={() => handleRoute("home")}
            >
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
