import React from "react";
import { FaTimes, FaPen, FaRegCircle, FaCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaCircle className="icon"></FaCircle>;

      break;

    case "cross":
      return <FaTimes className="icon" />;
      break;

    default:
      return <FaPen className="icon" />;

      break;
  }
};

export default Icon;
