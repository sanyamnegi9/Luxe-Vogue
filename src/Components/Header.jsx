import React from "react";
import carousel1 from "../Assets/images/carousel1.jpg";
import carousel2 from "../Assets/images/carousel2.jpg";
import carousel3 from "../Assets/images/carousel3.jpg";
import carousel4 from "../Assets/images/carousel4.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide mt-1"
      style={{ zIndex: "-1" }}
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link>
            <img src={carousel1} className="d-block w-100" alt="..." />
          </Link>
        </div>
        <div className="carousel-item">
          <Link>
            <img src={carousel2} className="d-block w-100" alt="..." />
          </Link>
        </div>
        <div className="carousel-item ">
          <Link>
            <img src={carousel3} className="d-block w-100" alt="..." />
          </Link>
        </div>
        <div className="carousel-item ">
          <Link>
            <img src={carousel4} className="d-block w-100" alt="..." />
          </Link>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
