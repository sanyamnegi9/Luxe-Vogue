import React from "react";
import "../Styles/DisplayCategory.scss";
import category1 from "../Assets/images/category1.jpg";
import category2 from "../Assets/images/category3.jpg";
import category3 from "../Assets/images/category2.jpg";
import { Link } from "react-router-dom";

const DisplayCategory = () => {
  return (
    <div className="display">
      <div className="first">
        <img src={category1} alt="" />
        <div className="bottom-left">
          <p>Lorem ipsum</p>
          <Link>Shop Now</Link>
        </div>
      </div>
      <div className="sec">
        <img src={category2} alt="" />
        <div className="bottom-left">
          <p>Lorem ipsum</p>
          <Link>Shop Now</Link>
        </div>
      </div>
      <div className="thr">
        <img src={category3} alt="" />
        <div className="bottom-left">
          <p>Lorem ipsum</p>
          <Link>Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCategory;
