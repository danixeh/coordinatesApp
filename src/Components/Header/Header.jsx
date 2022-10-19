import React from "react";
import "../../App.css";
import HeaderCs from "./HeaderCs.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLogged = localStorage.getItem("token");
  return (
    <div className="header ">
      <NavLink to="/">
        <img className="img-hr" src="/public/logo.svg " alt="" />
      </NavLink>
      <nav className="header_nav">
        <ul className="header_list">
          <li className="header_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "increasee"
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li className="header_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : " increasee"
              }
              to="/media"
            >
              Media
            </NavLink>
          </li>
          <li className="header_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "increasee"
              }
              to="/partners"
            >
              Partners
            </NavLink>
          </li>
          <li className="header_item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "increasee"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          {isLogged ? (
            ""
          ) : (
            <li className="header_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link increasee" : "increasee"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
