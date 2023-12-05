import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {FooterSmall} from '../Footer';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSmall />
    </>
  );
};

export default SharedLayout;
