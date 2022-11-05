import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Login.css"
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

const LoginForm = (params) => {
  const [regNumber, setregNumber] = useState("");
  const [password, setpassword] = useState("");
  const nav = useNavigate();
  const {
    userDetails,
    setUserDetails,
    isAuthenticated,
    setIsAuthenticated,
    userName,
    setUserName,
  } = useContext(AuthContext);
  useEffect(() => {}, []);

  const submitClicked = (e) => {
    e.preventDefault();
    if (regNumber == "admin" && password == "admin") {
      console.log("admin");
      setIsAuthenticated(true);
      setUserName("Admin");
      nav("/AdminHome");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "User Name OR Password In correct!",
      });
      console.log("failed");
    }
  };

  return (
    <div>

<div>
      <div class="boxlog mt-5">
        <h1>Sign In</h1>

        <form onSubmit={submitClicked}>
          <div class="inputlog">
          <input
              type="text"
              name="email"
              placeholder="UserName"
              onChange={(e) => {
                setregNumber(e.target.value);
              }}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
          </div>

          <input type="submit" value="Sign in" className="sub " />
        </form>

        
      </div>
    </div>



      <div class="boxlog mt-5">
        <h1>Sign In</h1>

        <form onSubmit={submitClicked}>
          <div class="inputlog">
            <input
              type="text"
              name="email"
              placeholder="UserName"
              onChange={(e) => {
                setregNumber(e.target.value);
              }}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
          </div>

          <input type="submit" value="Sign in" className="sub " />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
