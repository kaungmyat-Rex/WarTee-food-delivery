import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

interface props {
  openmodel: boolean;
  setOpenmodel: any;
  foodFormodel: string;
}

const infoModel = ({ openmodel, setOpenmodel, foodFormodel }: props) => {
  return (
    <div className={`section-infomodel ${openmodel ? "infomodel-show" : ""}`}>
      <div className="section-infomodel-main">
        <div className="section-infomodel-boder">
          <div className="infomodel-body">
            <div className="infomodel-header">
              <FaInfoCircle className="model-icon" />
              <p>Warning Message</p>
              <AiOutlineClose
                className="model-icon-close"
                onClick={() => setOpenmodel(false)}
              />
            </div>
            <div className="model-bar"></div>
            <p className="model-text-p">
              <span
                style={{
                  color: "#F0A160",
                  fontWeight: "900",
                  fontSize: "16px",
                }}
              >
                {foodFormodel}
              </span>{" "}
              order is already existed in your food cart. please check your food
              cart list if you don't want to believe me xD!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoModel;
