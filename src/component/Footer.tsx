import logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className="section-footer-main">
      <div className="section-footer-boder">
        <div className="footer-list-main">
          <div className="logo-list">
            <img className="logo-list-img" src={logo} alt="logo" />
            <h3 className="logo-list-text">WarTee</h3>
            <p>Fast Food Delivery</p>
          </div>
          <div className="faq-list">
            <h3>FAQ List</h3>
            <p>Term of Use</p>
            <p>Privacy Notice</p>
            <p>Cookie Policy</p>
            <p>Do not Sell Info</p>
          </div>
          <div className="contact-list">
            <h3>Contact</h3>
            <p>+95 9762881332</p>
            <p>wartee@gmail.com</p>
          </div>
          <div className="developer-list">
            <h3>Developer</h3>
            <p>Kaung Myat</p>
            <p>aungakm667@gmail.com</p>
          </div>
        </div>
        <div className="copy-right-list">
          <p>@CopyRight 2023 All Right Reserve</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
