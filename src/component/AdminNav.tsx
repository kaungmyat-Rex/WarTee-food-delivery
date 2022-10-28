import React from "react";
import Logo from "../img/logo.png";

const AdminNav = () => {
  return (
    <div className="admin-nav-main">
      <div className="admin-nav-logo">
        <img src={Logo} alt="logo" className="admin-logo" />
        <h4>
          WarTEE <span style={{ color: "#3d1d15" }}>/Admin</span>
        </h4>
      </div>

      <div className="admin-nav-navigation">
        <div className="admin-nav-p">
          <p>Dashboard</p>
          <p>Orders</p>
          <p>Add Products</p>
          <p>Product List</p>
          <p>History</p>
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
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
