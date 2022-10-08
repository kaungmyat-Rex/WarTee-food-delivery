import React from "react";
import Navbar from "../component/Navbar";

// import { BsChatRightQuote } from "react-icons/bs";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import Footer from "../component/Footer";
interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: [];
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
}
const About = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
}: props) => {
  return (
    <div className="about-section">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />
      <div className="about-section-main">
        <div className="about-main-boder">
          <div className="about-main-body">
            <h3 className="about-title">About Us</h3>
            <div className="about-bar"></div>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              sed odio reprehenderit ut, nobis fuga consequuntur dolorum dolor
              animi sunt accusamus? Ut eligendi iure magni quos modi inventore
              ipsam fugit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorum omnis hic nisi blanditiis, magnam accusamus cum
              architecto doloribus? Quidem, reiciendis veniam? Voluptatum iure
              hic suscipit quaerat esse provident cupiditate labore?
            </p>
          </div>
        </div>
      </div>
      <div className="testi-section-title">
        <h3>THEY TRUST US</h3>
      </div>
      <div className="testi-section-main">
        <div className="testi-section-body">
          <div className="testi-model-one">
            <BsChatRightQuoteFill className="testi-icon" />
            <p className="testi-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              pariatur quidem blanditiis omnis ducimus sint corrupti doloremque
              vel veritatis excepturi!
            </p>
            <div className="testi-bar"></div>

            <p className="testi-name">EainDra</p>
            <BsPersonCircle className="testi-icon-ps" />
          </div>
          <div className="testi-model-two">
            <BsChatRightQuoteFill className="testi-icon" />
            <p className="testi-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              pariatur quidem blanditiis omnis ducimus sint corrupti d
            </p>
            <div className="testi-bar"></div>

            <p className="testi-name">Kit Kit Tone</p>
            <BsPersonCircle className="testi-icon-ps" />
          </div>

          <div className="testi-model-three">
            <BsChatRightQuoteFill className="testi-icon" />
            <p className="testi-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              pariatur quidem blanditiis omnis ducimus sint corrupti doloremque
              vel!
            </p>
            <div className="testi-bar"></div>

            <p className="testi-name">Pone Pone</p>
            <BsPersonCircle className="testi-icon-ps" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
