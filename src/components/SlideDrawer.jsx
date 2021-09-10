import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import ModeSwitch from "./common/ModeSwitch";
import FAQ from "./FAQ";

function SlideDrawer({ name }) {
  return (
    <div className={name}>
      <div className="SlideDrawer__menu">
        <Link to="/dashboard">Your dashboard</Link>
        <Link to="/dashboard">MyTV stacking data</Link>
        <Link to="/dashboard">offers</Link>
        <Link to="/dashboard">Minitoring</Link>
        <ModeSwitch />
      </div>
      <FAQ />
      <Contact />
    </div>
  );
}

export default SlideDrawer;
