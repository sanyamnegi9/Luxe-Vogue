import { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Search from "./Search";
import Cart from "../Cart/Cart";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../contexts/CartContext";
import { Category } from "@mui/icons-material";

const Navbar = () => {
  const { itemAmount } = useContext(CartContext);

  const [productCategories, setProductCategories] = useState([]);

  const [showCart, setshowCart] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => setSearchOpen((prev) => !prev);
  const toggleMenu = () => setshowCart((prev) => !prev);
  const closeMenuAndSearch = () => {
    setshowCart(false);
    setSearchOpen(false);
  };

  // fetch products category's
  useEffect(() => {
    const fetchProductCategory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setProductCategories(data);
    };
    fetchProductCategory();
  });

  return (
    <nav className={`${searchOpen ? "search-active" : ""}`}>
      <div className="nav-left">
        {productCategories.slice(0, 3).map((category) => (
          <div className="drop-container">
            <Link to={`products/${category}`}>{category}</Link>
          </div>
        ))}
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
