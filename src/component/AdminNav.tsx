import React, { useContext, useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdOutlineFastfood } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
interface props {
  uploadcheck: boolean;
  checkerror: boolean;
  checkimg: boolean;
  delCheck: boolean;
}
const AdminNav = ({ uploadcheck, checkerror, checkimg, delCheck }: props) => {
  const [openNav, setOpenNav] = useState(false);

  const logoutFun = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="admin-nav-main">
        <div className="admin-nav-logo">
          <img src={Logo} alt="logo" className="admin-logo" />
          <h4>
            WarTEE <span style={{ color: "#3d1d15" }}>/Admin</span>
          </h4>
        </div>

        <div className="admin-nav-navigation">
          <span
            className={`admin-infobox ${
              uploadcheck ? "admin-infobox-show" : ""
            }`}
          >
            Your Food Menu Is Add To The List
          </span>
          <span
            className={`admin-errorbox ${
              checkerror ? "admin-errorbox-show" : ""
            }`}
          >
            You Can't Leave Empty Field in Name and Price.
          </span>
          <span
            className={`admin-errorimg ${
              checkimg ? "admin-errorimg-show" : ""
            }`}
          >
            We Recommended to Add Image For Your Food Menu.
          </span>
          <span
            className={`admin-delbox ${delCheck ? "admin-delbox-show" : ""}`}
          >
            Your Food Menu Is Delected From The List
          </span>
          <div className="admin-nav-p">
            <Link style={{ textDecoration: "none" }} to={"/login/dashboard"}>
              <p>Dashboard</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/login/orderlist"}>
              <p>Orders</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/login/add"}>
              <p>Add Products</p>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/login/productlist"}>
              <p>Product List</p>
            </Link>

            <p onClick={() => logoutFun()}>Logout</p>

            <Link style={{ textDecoration: "none" }} to={"/"}>
              <p>
                {" "}
                <span
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Switch to Client{" "}
                </span>
              </p>
            </Link>
          </div>
        </div>
        <div className="admin-nav-ham" onClick={() => setOpenNav(!openNav)}>
          <GiHamburgerMenu className="admin-icon-nav-ham" />
        </div>
      </div>
      <div
        className={`section-navside ${openNav ? "section-navside-show" : ""}`}
      >
        <div className="admin-navside-main">
          <div className="admin-navside-border">
            <div className="admin-navside-section">
              <div className="admin-nav-logo" style={{ paddingTop: "30px" }}>
                <img src={Logo} alt="logo" className="admin-logo" />
                <h4 style={{ color: "#3d1d15 ", paddingTop: "13px" }}>
                  WarTEE
                </h4>
              </div>
              <Link style={{ textDecoration: "none" }} to={"/login/dashboard"}>
                <p className="admin-sidenav-text">
                  <MdOutlineSpaceDashboard className="admin-nav-sideIcon" />
                  <span>Dashboard</span>
                </p>{" "}
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/login/orderlist"}>
                {" "}
                <p className="admin-sidenav-text">
                  <AiOutlineCustomerService className="admin-nav-sideIcon" />
                  <span>Orders</span>
                </p>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/login/add"}>
                {" "}
                <p className="admin-sidenav-text">
                  <MdOutlineFastfood className="admin-nav-sideIcon" />
                  <span>Add Foods</span>
                </p>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/login/productlist"}
              >
                {" "}
                <p className="admin-sidenav-text">
                  <BiFoodMenu className="admin-nav-sideIcon" />
                  <span>Menu Lists</span>
                </p>
              </Link>

              <p onClick={() => logoutFun()} className="admin-sidenav-text">
                <MdLogout className="admin-nav-sideIcon" />
                <span>Logout</span>
              </p>

              <Link style={{ textDecoration: "none" }} to={"/"}>
                {" "}
                <p className="admin-sidenav-text">
                  <AiOutlineUserSwitch className="admin-nav-sideIcon" />
                  <span>Switch to Client</span>
                </p>
              </Link>
            </div>
            <MdClose
              className="close-navside-icon"
              onClick={() => setOpenNav(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
