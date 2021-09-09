import React from "react";
import Actions from "../components/Actions";
import Contact from "../components/Contact";
import ContractInfo from "../components/ContractInfo";
import Dashboard from "../components/Dashboard";
import FAQ from "../components/FAQ";
import StackingData from "../components/StackingData";

function Home() {
  return (
    <div className="Home">
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
    </div>
  );
}

export default Home;
