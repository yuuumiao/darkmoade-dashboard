import React from "react";
import StakeBtn from "./common/StakeBtn";

function Actions() {
  return (
    <div className="Actions rightside">
      <h3>Actions</h3>
      <div className="Actions__buttons">
        <StakeBtn type="stake" />
        <br />
        <StakeBtn type="my stake" />
      </div>
    </div>
  );
}

export default Actions;
