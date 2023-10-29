import React from "react";
import shipping from "../Assets/icons/free-shipping.png";
import send from "../Assets/icons/send.png";
import ret from "../Assets/icons/return.png";
import "../Styles/Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Services = () => {
  return (
    <>
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

      {/* mobile */}
      <div
        id="carouselExampleInterval"
        class="carousel slide services-carousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="700">
            <div className="service-items">
              <FontAwesomeIcon icon={faTruckFast} fade size="2xl" />
              <p>Free shipping over ₹500</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="600">
            <div className="service-items">
              <FontAwesomeIcon icon={faPaperPlane} fade size="2xl" />
              <p>Questions? contact Us</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="service-items">
              <FontAwesomeIcon icon={faRotateLeft} fade size="2xl" />
              <p>Easy Return</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
