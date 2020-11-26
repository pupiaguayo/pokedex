import React from "react";
import logo from "../logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
