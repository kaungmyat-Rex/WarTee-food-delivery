import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { json } from "stream/consumers";
import { AiOutlineWarning } from "react-icons/ai";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setpw] = useState("");

  const [userlog, setUserlog] = useState(false);
  const [loginFail, setloginfail] = useState(true);

  const submitFun = async () => {
    await axios
      .post(`https://outrageous-bikini-toad.cyclic.app/login`, {
        username: name,
        password: password,
      })
      .then((res) => {
        setloginfail(res.data);
        if (res.data === true) {
          localStorage.setItem("user", res.data);
          setUserlog(true);
        }
      });
  };

  // to handle localStorage getitem and to prevent log outing when refresh
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data === "true") {
      setUserlog(true);
    } else {
      setUserlog(false);
    }
  }, []);

  return (
    <div>
      {userlog ? (
        <Outlet />
      ) : (
        <div className="login-main">
          <div className="login-border">
            <h3>Are you admin of wartee?</h3>
            <div className="username-div">
              <span
                className={`login-warning-block ${
                  loginFail ? "" : "login-warn-show"
                }`}
              >
                <p className="login-warning">
                  {" "}
                  <AiOutlineWarning
                    style={{ fontSize: "25px", paddingRight: "10px" }}
                  />
                  Incorect username or password
                </p>
              </span>
              <h3>Email</h3>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="password-div">
              <h3>Password</h3>
              <input
                type="password"
                onChange={(e) => setpw(e.target.value)}
                value={password}
              />
            </div>
            <div className="login-div">
              <button className="login-btn" onClick={() => submitFun()}>
                Login
              </button>
              <div className="login-bar"></div>
            </div>
            <div className="login-error">
              <p>
                Can't login?{" "}
                <a style={{ color: "#d85d44" }} href="#">
                  Help
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
