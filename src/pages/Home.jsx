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

function Home() {
  // eslint-disable-next-line
  const [currentDot, setCurrentDot] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={isDrawerOpen ? "Home open" : "Home"}>
      <Desktop>
        <div className="Home__left">
          <Dashboard />
          <div className="Home__bottom">
            <StackingData />
            <ContractInfo />
          </div>
        </div>

        <div className="Home__right">
          <Actions />
          <Contact />
          <FAQ />
        </div>
      </Desktop>

      <Mobile>
        {/* {isDrawerOpen && <SlideDrawer name={drawerClassName} />} */}
        {/* <SlideDrawer name={isDrawerOpen ? "SlideDrawer open" : "SlideDrawer"} /> */}
        <SlideDrawer name="SlideDrawer open" />
        <div className="Home__mobile">
          {/* <div className={isDrawerOpen ? "Home__mobile open" : "Home__mobile"}> */}

          <NavMobile setDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
          <Dashboard />
          <Dots currentIndex={currentDot} />
        </div>
      </Mobile>
    </div>
  );
}

export default Home;
