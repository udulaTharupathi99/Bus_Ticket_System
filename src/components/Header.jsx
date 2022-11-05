import React from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Header() {
  const {
    userDetails,
    setUserDetails,
    isAuthenticated,
    setIsAuthenticated,
    userName,
    setUserName,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const AuthenticatedNavBar = () => {
    return (
      <>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul class="nav-list">
            <li>
              <a href="#!">Hello {userName}</a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                User Details Management
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                mewwa mewwa
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={() => {
                  setUserDetails(null);
                  setIsAuthenticated(false);
                  setUserName(null);
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  };
  const unAuthenticatedNavBar = () => {
    return (
      <>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul class="nav-list">
            <li>
              <a
                href="/login"
                onClick={() => {
                  setUserDetails(null);
                  setIsAuthenticated(false);
                  setUserName(null);
                }}
              >
                log in
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  };

  return (
    <div>
      <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a href="#!">MyBus</a>
          </div>
          {!isAuthenticated ? unAuthenticatedNavBar() : AuthenticatedNavBar()}
          {/* {!isAuthenticated ? AuthenticatedNavBar() : unAuthenticatedNavBar()} */}
          {/* {navbar} */}
        </div>
      </section>
    </div>
  );
}

export default Header;
