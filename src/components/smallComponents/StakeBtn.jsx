import React from "react";
import { Link } from "react-router-dom";

function StakeBtn({ type, stakeLink }) {
  let classname = type === "stake" ? "gradient" : "gradient reverse";
  return (
    <Link to={!!stakeLink ? stakeLink : "#"}>
      <button className={classname}>{type}</button>
    </Link>
  );
}

export default StakeBtn;
