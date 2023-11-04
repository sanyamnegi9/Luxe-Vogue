import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";
import OnTheTop from "./OnTheTop";
import InTheHome from "./InTheHome";
import Designers from "./Designers";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";

const cartValue = 0;

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="left-icons-container">
        <MenuIcon className="navbar-icons" />
      </div>
      <div className="navbar-links left-links">
        <div className="drop-container">
          <Link>ON THE BODY</Link>
          <OnTheTop />
        </div>
        <div className="drop-container">
          <Link>IN THE HOME</Link>
          <InTheHome />
        </div>
      </div>
      <div className="brand">
        <Link to="/">LUXE VOGUE</Link>
      </div>

      <div className="navbar-links right-links">
        <NavLink to="/contact">ACCOUNT</NavLink>
        <NavLink>SEARCH</NavLink>
        {/* <div className="side-cart"> */}
        <div>{`CART (${cartValue})`} </div>
        {/* <SideCart className={cartOpen?".cartOpen": ""}/> */}
        {/* </div> */}
      </div>
      <div className="icons-container">
        <PermIdentityIcon className="navbar-icons hide-icon"/>
        <SearchIcon className="navbar-icons" />
        <ShoppingCartIcon className="navbar-icons" />
      </div>
    </div>
  );
};

export default Navbar;
