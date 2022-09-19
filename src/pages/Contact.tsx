import React from "react";
import { props } from "../component/interface";
import Navbar from "../component/Navbar";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";

import Footer from "../component/Footer";

const Contact = ({ language, setLanguage }: props) => {
  return (
    <div style={{ backgroundColor: "#f4eee1" }}>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="contact-section-main">
        <div className="contact-main-boder">
          <div className="contact-main-body">
            <h3 className="contact-title">Contact Us</h3>
            <div className="contact-bar"></div>
            <div className="contact-form-main">
              <div className="nameandphone">
                <input type="text" className="name" placeholder="Your Name" />
                <input
                  type="text"
                  className="phone"
                  placeholder="Phone Number"
                />
              </div>
              <input type="text" className="email" placeholder="Email" />
              <input type="text" className="message" placeholder="Message" />

              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-info-main">
        <div className="contact-info-boder">
          <div className="contact-title-text">
            <h4>WHERE ARE WE FROM?</h4>
          </div>
          <div className="contact-info-body">
            <div className="contact-address-main">
              <ImQuotesLeft className="quote-left" />

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                inventore voluptas in eveniet tenetur, iste obcaecati cupiditate
                ipsam odit numquam tempore veritatis deserunt sint, ut,
                voluptate neque odio porro? Nesciunt!. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <ImQuotesRight className="quote-right" />
            </div>
            <div className="contact-social-main">
              <p>You can contact us from</p>
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
