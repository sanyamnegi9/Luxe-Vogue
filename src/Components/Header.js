import React from "react";
import "../Styles/Components/Header.scss";
import { Link } from "react-router-dom";
import { carouselData } from "../Data";

const Header = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide mt-1"
      style={{ zIndex: "1" }}
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        {carouselData.map(({ id, img }) => (
          <div key={id} className={`carousel-item ${id===1?"active":""}`}>
            <Link>
              <img src={img} className="d-block w-100" alt="..." />
            </Link>
          </div>
        ))}
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
