import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function FAQ() {
  return (
    <div className="FAQ rightside">
      <FaQuestionCircle size={"1.5rem"} />
      <h3>FAQ</h3>
      <p>Have quetions? We can help you find your answers here</p>
      <BsArrowRight size={"2rem"} className="icon-arrow" />
    </div>
  );
}

export default FAQ;
