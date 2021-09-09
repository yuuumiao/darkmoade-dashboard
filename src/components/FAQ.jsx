import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function FAQ() {
  return (
    <div className="FAQ rightside">
      <FaQuestionCircle size={"1.7rem"} />
      <h3>FAQ</h3>
      <p>Have quetions? We can help you find your answers here</p>
      <Link to="#">
        <BsArrowRight size={"2rem"} className="icon-arrow" />
      </Link>
    </div>
  );
}

export default FAQ;
