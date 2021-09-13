import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function FAQ() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const iconSize = isMobile ? "6.5vh" : "3rem";

  return (
    <div className="FAQ rightside">
      <FaQuestionCircle size={"1.7rem"} />
      <h3>FAQ</h3>
      <p>Have quetions? We can help you find your answers here</p>
      <Link to="#">
        <BsArrowRight size={iconSize} className="icon-arrow" />
      </Link>
    </div>
  );
}

export default FAQ;
