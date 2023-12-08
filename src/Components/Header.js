import React from 'react'

import headerImg from "../Assets/headerImg.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-4">
      <img
        src={headerImg}
        alt="highlight"
        className="absolute top-0 h-[100vh] w-full object-cover bg-center  z-[-1]"
      />
      <h1>Luxe Vogue</h1>
      <h2>Men's clothing</h2>
      <h3>A modern day miracle</h3>
      <Link className="btn secondary-btn">Shop now</Link>
    </section>
  );
}

export default Header