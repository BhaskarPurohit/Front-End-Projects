import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <img
      className="main--banner"
      src={require("../img/main-banner.png")}
      alt=""
    />
  );
};

export default Hero;
