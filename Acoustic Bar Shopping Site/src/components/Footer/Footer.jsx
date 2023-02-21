import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            This is a clone website for shopping products such as headphones,
            smartwatches, noise cancelling devices. I took inspiration from
            website Boat, Sennhizer and Sony.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Hinjewadi Phase 2, IT Park, Pune Maharashtra
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9509627038</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: bhaskarpurohit22@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home THeatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            Acoutics Bar 2023 created by BHASKAR PUROHIT, Front End Developer
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
