import React from "react";

function Dots({ length, currentIndex }) {
  return (
    <div className="DotsWrapper">
      {Array.from(Array(!!length ? length : 3).keys()).map((e, i) => {
        const dotClassName = i === currentIndex ? "dots current" : "dots";
        return <span key={i} className={dotClassName} />;
      })}
    </div>
  );
}

export default Dots;
