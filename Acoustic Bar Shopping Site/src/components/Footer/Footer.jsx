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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            quasi ipsam voluptatum praesentium consectetur aliquam doloribus
            voluptatibus quisquam cupiditate vel?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Kayaloram Rd, Punnamada, KOttankulangara, Alapuzza Kerala, 68888
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 1800 900 0101</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">
              Email: business.aucoustic-bar@hotmail.com
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
