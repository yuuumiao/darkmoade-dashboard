import React from "react";

function StackingDataCard({ left, right }) {
  return (
    <div className="StackingDataCard">
      <p className="StackingDataCard__left">{left}</p>
      <p className="StackingDataCard__right">{right}</p>
    </div>
  );
}

export default StackingDataCard;
