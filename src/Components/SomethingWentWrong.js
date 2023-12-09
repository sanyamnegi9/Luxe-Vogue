import React from "react";
import errorImg from "../Assets/images/something-went-wrong.png";
import { Link } from "react-router-dom";

const SomethingWentWrong = () => {
  return (
    <div className="h-50rem w-full flex flex-col items-center justify-center mb-4 gap-3">
      <h2 className=" text-[2.5rem]">Oops!</h2>
      <h3 className=" text-[1.2rem] font-medium normal-case mb-2">I ate the page you're looking for</h3>
      <Link to="/" className="btn primary-btn">
        Back To Home
      </Link>
      <img src={errorImg} alt="error-logo"  className="h-[15rem] w-[15rem] object-contain"/>
    </div>
  );
};

export default SomethingWentWrong;
