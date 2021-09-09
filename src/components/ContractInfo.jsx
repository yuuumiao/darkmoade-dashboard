import React from "react";
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";
import { FaExclamationCircle } from "react-icons/fa";

function ContractInfo() {
  return (
    <div className="ContractInfo">
      <h3>
        <FaExclamationCircle size={"1.2rem"} /> <span> Contract info</span>
      </h3>
      <div className="ContractInfo__container">
        <div className="ContractInfo__list">
          <p className="ContractInfo__listleft">Market Cap</p>
          <div className="ContractInfo__line"></div>
          <p className="ContractInfo__listright">
            <CurrencyFormat
              value={300000000}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"$"}
            />
          </p>
        </div>

        <div className="ContractInfo__list">
          <p className="ContractInfo__listleft">Total supply</p>
          <div className="ContractInfo__line"></div>
          <p className="ContractInfo__listright">
            <NumberFormat
              value={390000000}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>

        <div className="ContractInfo__list">
          <p className="ContractInfo__listleft">Address</p>
          <div className="ContractInfo__line"></div>
          <p className="ContractInfo__listright address">1knHiH...295cm</p>
        </div>

        <div className="ContractInfo__list">
          <p className="ContractInfo__listleft">Total supply</p>
          <div className="ContractInfo__line"></div>
          <p className="ContractInfo__listright">
            <NumberFormat
              value={1789492}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContractInfo;
