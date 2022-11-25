import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

interface props {
  uploadcheck: boolean;
  checkerror: boolean;
  checkimg: boolean;
  delCheck: boolean;
}
const AdminNav = ({ uploadcheck, checkerror, checkimg, delCheck }: props) => {
  return (
    <div className="admin-nav-main">
      <div className="admin-nav-logo">
        <img src={Logo} alt="logo" className="admin-logo" />
        <h4>
          WarTEE <span style={{ color: "#3d1d15" }}>/Admin</span>
        </h4>
      </div>

      <div className="admin-nav-navigation">
        <span
          className={`admin-infobox ${uploadcheck ? "admin-infobox-show" : ""}`}
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
          className={`admin-errorimg ${checkimg ? "admin-errorimg-show" : ""}`}
        >
          We Recommended to Add Image For Your Food Menu.
        </span>
        <span className={`admin-delbox ${delCheck ? "admin-delbox-show" : ""}`}>
          Your Food Menu Is Delected From The List
        </span>
        <div className="admin-nav-p">
          <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
            <p>Dashboard</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/orderlist"}>
            <p>Orders</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/add"}>
            <p>Add Products</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/productlist"}>
            <p>Product List</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
            <p>History</p>
          </Link>
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
    </div>
  );
};

export default AdminNav;
