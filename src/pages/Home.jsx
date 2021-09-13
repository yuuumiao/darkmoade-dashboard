import React, { useState } from "react";
import Actions from "../components/Actions";
import Contact from "../components/Contact";
import ContractInfo from "../components/ContractInfo";
import Dashboard from "../components/Dashboard";
import FAQ from "../components/FAQ";
import StackingData from "../components/StackingData";
import { Desktop, Mobile } from "../components/utilities/Breakpoints";
import NavMobile from "../components/NavMobile";
import Dots from "../components/common/Dots";
import SlideDrawer from "../components/SlideDrawer";
import StakeBtn from "../components/common/StakeBtn";

function Home() {
  // eslint-disable-next-line
  const [currentDot, setCurrentDot] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="Home">
      <Desktop>
        <Dashboard />
        <div className="Home__bottom">
          <StackingData />
          <ContractInfo />
        </div>

        <Actions />
        <Contact />
        <FAQ />
      </Desktop>

      <Mobile>
        <SlideDrawer name={isDrawerOpen ? "SlideDrawer open" : "SlideDrawer"} />
        <div className={isDrawerOpen ? "Home__mobile open" : "Home__mobile"}>
          <NavMobile setDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
          <Dashboard />
          <Dots currentIndex={currentDot} />
          <div className="Home__mobile-buttons">
            <StakeBtn type="stake" /> <StakeBtn type="my stake" />
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Home;
