import React from "react";
import logo from "../logo.svg";
import "./navbar.css";
function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <img src={logo} alt="" />
      </div>
    </React.Fragment>
  );
}
export default Navbar;
