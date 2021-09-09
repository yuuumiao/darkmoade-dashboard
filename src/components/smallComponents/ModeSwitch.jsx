import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const ModeSwitch = () => {
  return (
    <div className="mode-switch">
      <BiSun className="icon-inactive" />
      <span className="icons-mode-switch">/</span>
      <BiMoon />
    </div>
  );
};

export default ModeSwitch;
