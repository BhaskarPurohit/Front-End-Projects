import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img
        className="nav--logo"
        src={require("../img/airbnb-logo-png-transparent.png")}
        alt=""
      />
    </nav>
  );
};

export default Navbar;
