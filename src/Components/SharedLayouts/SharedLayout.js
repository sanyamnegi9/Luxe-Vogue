import React from "react";
import { Outlet } from "react-router-dom";
import {FooterSmall} from '../Footer';
import Navbar from "../Navbar";

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
