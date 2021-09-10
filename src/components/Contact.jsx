import React from "react";
import { FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  const iconSize = "1.4rem";

  return (
    <div className="Contact rightside">
      <h3>Contact</h3>
      <div className="Contact__container">
        <div className="Contact__column">
          <Link to="#" className="Contact__info">
            <FaTelegram size={iconSize} className="icon telegram" />
            <span>Telegram </span>
          </Link>

          <Link to="#" className="Contact__info">
            <FaTwitter size={iconSize} className="icon twitter" />
            <span> Twitter </span>
          </Link>
        </div>

        <div className="spacer" />

        <div className="Contact__column">
          <Link to="#" className="Contact__info">
            <FaDiscord size={iconSize} className="icon discord" />
            <span> Discord </span>
          </Link>

          <Link to="#" className="Contact__info">
            <FaTwitter size={iconSize} />
            <span> Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
