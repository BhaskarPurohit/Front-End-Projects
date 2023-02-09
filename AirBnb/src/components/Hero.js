import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section>
      <img
        className="main--banner"
        src={require("../img/main-banner.png")}
        alt=""
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join uniques interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
