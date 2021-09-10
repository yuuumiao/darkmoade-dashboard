import React from "react";
import { Link } from "react-router-dom";

export const ConnectWalletBtn = ({ walletLink }) => {
  return (
    <Link to={!!walletLink ? walletLink : "#"}>
      <button className="Dashboard__button">connect wallet</button>
    </Link>
  );
};
