import React from "react";
import { FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa";

function Contact() {
  const iconSize = "1.2rem";
  return (
    <div className="Contact rightside">
      <h3>Contact</h3>
      <div className="Contact__container">
        <div className="Contact__row">
          <p className="Contact__info">
            <span>
              <FaTelegram size={iconSize} className="icon-telegram" />
            </span>
            Telegram
          </p>
          <p className="Contact__info">
            <span>
              <FaDiscord size={iconSize} className="icon-discord" />
            </span>
            Discord
          </p>
        </div>
        <div className="Contact__row">
          <p className="Contact__info">
            <span>
              <FaTwitter size={iconSize} className="icon-twitter" />
            </span>
            Twitter
          </p>
          <p className="Contact__info">
            <span>
              <FaTwitter size={iconSize} />
            </span>{" "}
            Website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
