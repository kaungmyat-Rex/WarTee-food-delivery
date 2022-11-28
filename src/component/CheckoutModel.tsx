import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
interface props {
  opencheckmodel: boolean;
  setOpencheckmodel: any;
}

const Checkoutmodel = ({ opencheckmodel, setOpencheckmodel }: props) => {
  return (
    <div
      className={`section-checkmodel ${
        opencheckmodel ? "section-checkmodel-show" : ""
      }`}
    >
      <div className="section-checkmodel-main">
        <div className="section-checkmodel-boder">
          <div className="checkmodel-body">
            <div className="checkmodel-header">
              <FaInfoCircle className="model-icon-check" />
              <p>Order Completed</p>
              <AiOutlineClose
                className="model-icon-close-check"
                onClick={() => setOpencheckmodel(false)}
              />
            </div>
            <div className="check-model-bar"></div>
            <p className="check-model-text-p">
              <span
                style={{
                  color: "#F0A160",
                  fontWeight: "900",
                  fontSize: "16px",
                }}
              ></span>{" "}
              Your Order List has been successfully created! Your Food may
              arrive around 15 or 20 min .Enjoy your Food!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutmodel;
