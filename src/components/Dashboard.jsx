import React from "react";
import DashboardCard from "./DashboardCard";
import { FaSquareFull } from "react-icons/fa";
import { ConnectWalletBtn } from "./smallComponents/ConnectWalletBtn";
import ModeSwitch from "./smallComponents/ModeSwitch";

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
        <div className="spacer" />

        <ModeSwitch />
        <ConnectWalletBtn />
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
