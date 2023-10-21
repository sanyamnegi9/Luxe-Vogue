import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person"; //login-person-icon
import PermIdentityIcon from "@mui/icons-material/PermIdentity"; //signup person icon
import StorefrontIcon from "@mui/icons-material/Storefront";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //wishlist-icon

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { PlayCircle } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h6 className="logo">Go-Cart</h6>
      </div>
      <div className="nav-items">
        <div className="profile-dropdown">
          <button className="drop-btn">
            <PermIdentityIcon />
            Profile
            <KeyboardArrowDownIcon />
          </button>
          <div className="dropdown-content">
            <div className="signup-container">
              <p className="signup-title">New Customer ?</p>
              <p className="signup-link">Signup</p>
            </div>
            <a href="/" className="dropdown-items-container">
              <FavoriteBorderIcon className="dropdown-item-icon" />
              <p className="dropdown-item-title">Wishlist</p>
            </a>
            <a href="/" className="dropdown-items-container">
              <LocalShippingIcon className="dropdown-item-icon" />
              <p className="dropdown-item-title">Orders</p>
            </a>
            <a href="/" className="dropdown-items-container">
              <CardGiftcardIcon className="dropdown-item-icon" />
              <p className="dropdown-item-title">Gifts</p>
            </a>
          </div>
        </div>
        <div className="seller-container">
          <StorefrontIcon className="seller-icon" />
          <p className="seller-title">Become a Seller</p>{" "}
          {/*replace this with link */}
        </div>

        <div className="cart-container">
          <ShoppingCartIcon className="cart-icon" />
          <p className="cart-title">Cart</p>
        </div>
        {/* <button id="signup-btn">Signup</button> */}
      </div>
      {/* menu icon for mobiles*/}
      <div className="menu-container">
        <MenuIcon fontSize="1rem" className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
