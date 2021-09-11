import React from "react";
import DashboardCard from "./DashboardCard";
import { FaSquareFull } from "react-icons/fa";
import { ConnectWalletBtn } from "./common/ConnectWalletBtn";
import ModeSwitch from "./common/ModeSwitch";
import { Desktop, Mobile } from "./utilities/Breakpoints";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Desktop>
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
      </Desktop>

      <Mobile>
        <div className="Dashboard__header">
          <h2>
            <span className="header-icon">
              <FaSquareFull />
            </span>
            Your dashboard
          </h2>
        </div>

        <div className="Dashboard__cardcontainer">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </Mobile>
    </div>
  );
};

export default Dashboard;
