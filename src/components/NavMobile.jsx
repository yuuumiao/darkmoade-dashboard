import React from "react";
import { FiMenu } from "react-icons/fi";
import { ConnectWalletBtn } from "./common/ConnectWalletBtn";

function NavMobile({ setDrawer }) {
  return (
    <div className="NavMobile">
      <p onClick={setDrawer}>
        <FiMenu size={"6vh"} />
        <span className="NavMobile__menu">Menu</span>
      </p>
      <div className="spacer" />
      <ConnectWalletBtn />
    </div>
  );
}

export default NavMobile;
