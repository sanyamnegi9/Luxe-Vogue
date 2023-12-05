import React from "react";
import "../Styles/Components/Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <div className="service-items">
        <FontAwesomeIcon icon={faTruckFast} fade size="2xl" />
        <p>Free shipping over ₹500</p>
      </div>
      <div className="service-items">
        <FontAwesomeIcon icon={faPaperPlane} fade size="2xl" />
        <p>Questions? contact Us</p>
      </div>
      <div className="service-items">
        <FontAwesomeIcon icon={faRotateLeft} spin spinReverse size="2xl" />
        <p>Easy Return</p>
      </div>
    </div>
  );
};

export default Services;
