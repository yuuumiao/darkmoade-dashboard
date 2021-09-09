import React from "react";
import DashboardCard from "./DashboardCard";
import { FaSquareFull } from "react-icons/fa";
import { BiSun, BiMoon } from "react-icons/bi";
// import { BsSlash } from "react-icons/bs";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Dashboard__header">
        <h2>
          <span className="header-icon">
            <FaSquareFull />
          </span>
          Your dashboard
        </h2>
        <div className="button-switch">
          <p>
            <BiSun className="icon-inactive" />
            <span className="icons-mode-switch">/</span>
            <BiMoon />
          </p>
          <button className="Dashboard__button">connect wallet</button>
        </div>
      </div>

      <div className="Dashboard__cardcontainer">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;
