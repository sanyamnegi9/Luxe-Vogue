import React from "react";

import headerImg from "../assets/images/headerImg.jpg";
import headerVideo from "../assets/videos/headerVideo.mp4";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="w-full h-[calc(100vh-5rem)]">
      {/* <img
        src={headerImg}
        alt="highlight"
        className="absolute top-0 h-[100vh] w-full object-cover bg-center  z-[-1]"
      /> */}
      <video
        src={headerVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 h-[100vh] w-full object-cover bg-center  z-[-1]"
      />
      <div className="absolute top-0 h-[100vh] w-full bg-black/20 z-[1]" />
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h1  className="z-[5]">Luxe Vogue</h1>
        <h2  className="z-[5]">Men's clothing</h2>
        <h3  className="z-[5]">A modern day miracle</h3>
        <Link to="/products" className="btn secondary-btn z-[5]">Shop now</Link>
      </div>
    </section>
  );
};

export default Header;
