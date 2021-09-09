import React from "react";
import StackingDataCard from "./StackingDataCard";
import { BsFillTriangleFill } from "react-icons/bs";

function StackingData() {
  return (
    <div className="StackingData">
      <h2>
        <span className="header-icon">
          <BsFillTriangleFill />
        </span>
        MyTV stacking data
      </h2>
      <StackingDataCard />
      <StackingDataCard />
      <StackingDataCard />
    </div>
  );
}

export default StackingData;
