import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={require("../img/image 12.png")} alt="" />
      <div className="card--stats">
        <img className="card--star" src={require("../img/star.png")} alt="" />
        <span className="greay">(6) &#x2022;</span>
        <span className="greay">USA</span>
      </div>
      <p>Life Lessons with Katie Zafres</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
