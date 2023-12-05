import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Search from "./Search";
import DropdownList from "./DropdownList";
import Cart from "../Cart/Cart";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const { itemAmount } = useContext(CartContext);

  const [showCart, setshowCart] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => setSearchOpen((prev) => !prev);
  const toggleMenu = () => setshowCart((prev) => !prev);
  const closeMenuAndSearch = () => {
    setshowCart(false);
    setSearchOpen(false);
  };

  return (
    <nav className={`${searchOpen ? "search-active" : ""}`}>
      <div className="nav-left">
        <div className="drop-container">
          <Link to="/in-the-home">in the home</Link>
          <DropdownList />
        </div>
        <div className="drop-container">
          <Link to="/in-the-body">in the body</Link>
          <DropdownList />
        </div>
        <div className="drop-container">
          <Link to="/designers">designers</Link>
          <DropdownList />
        </div>
      </div>
      <div className="mobile-nav-left">
        <Link>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </Link>
      </div>
      <Link to="/" className="logo">
        Luxe-Vogue
      </Link>
      <div className="nav-right">
        <Link to="/login" target="_blank">
          Account
        </Link>
        <Link onClick={toggleSearch}>Search</Link>
        <Link onClick={toggleMenu}>
          Cart <span className="cart-icon">{`(${itemAmount})`}</span>
        </Link>
      </div>
      <div className="mobile-nav-right">
        <Link to="/login" target="_blank" className="account-icon">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Link>
        <Link onClick={toggleSearch} className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </Link>
        <Link onClick={toggleMenu} className="cart-icon">
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
          <div>{itemAmount}</div>
        </Link>
      </div>
      <DropdownList />
      <Search isOpen={searchOpen} onClose={closeMenuAndSearch} />
      <Cart isOpen={showCart} onClose={closeMenuAndSearch} />

      {/* overlay */}
      <div
        className={`overlay ${showCart ? "active" : ""}`}
        onClick={closeMenuAndSearch}
      />
    </nav>
  );
};

export default Navbar;
