import React, { useEffect } from "react";

import Navbar from "../component/Navbar";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { Burmese } from "../component/Burmese";

import Footer from "../component/Footer";
interface props {
  language: boolean;
  setLanguage: (data: boolean) => void;
  productData: any;
  setAddtocartList: any;
  addtocartList: any;
  addNoti: boolean;
}

const Contact = ({
  language,
  setLanguage,
  productData,
  setAddtocartList,
  addtocartList,
  addNoti,
}: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#f4eee1" }}>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        productData={productData}
        setAddtocartList={setAddtocartList}
        addtocartList={addtocartList}
        addNoti={addNoti}
      />
      <div className="contact-section-main">
        <div className="contact-main-boder">
          <div className="contact-main-body">
            <h3 className="contact-title">
              {language ? Burmese[0].contextText1 : "Contact Us"}
            </h3>
            <div className="contact-bar"></div>
            <div className="contact-form-main">
              <div className="nameandphone">
                <input
                  type="text"
                  className="name"
                  placeholder={language ? Burmese[0].contextText2 : "Your Name"}
                />
                <input
                  type="text"
                  className="phone"
                  placeholder={
                    language ? Burmese[0].contextText4 : "Phone Number"
                  }
                />
              </div>
              <input
                type="text"
                className="email"
                placeholder={language ? Burmese[0].contextText3 : "Email"}
              />
              <input
                type="text"
                className="message"
                placeholder={language ? Burmese[0].contextText5 : "Message"}
              />

              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info-main">
        <div className="contact-info-boder">
          <div className="contact-title-text">
            <h4>{language ? Burmese[0].contextText6 : "WHERE ARE WE FROM?"}</h4>
          </div>
          <div className="contact-info-body">
            <div className="contact-address-main">
              <ImQuotesLeft className="quote-left" />

              <p>
              Thank you for choosing WarTee as your go-to fast food restaurant. We look forward to serving you and providing a memorable dining experience that keeps you coming back for more.
              </p>
              <ImQuotesRight className="quote-right" />
            </div>
            <div className="contact-social-main">
              <p>
                {language ? Burmese[0].contextText7 : "You can contact us from"}
              </p>
              <div className="social-bar"></div>
              <div className="social-icon-list">
                <BsFacebook className="s-icon1" />
                <BsMessenger className="s-icon2" />
                <BsInstagram className="s-icon3" />
                <FaViber className="s-icon4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
