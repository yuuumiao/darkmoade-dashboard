import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { useMediaQuery } from 'react-responsive'


const ModeSwitch = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 676px)' })
  const iconSize = isMobile? "3vh" :"1rem"

  return (
    <div className="mode-switch">
      <BiSun className="icon-inactive" size={iconSize}/>
      <span className="icons-mode-switch">/</span>
      <BiMoon size={iconSize}/>
    </div>
  );
};

export default ModeSwitch;
