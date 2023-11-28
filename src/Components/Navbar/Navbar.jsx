import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Search from "./Search";
import DropdownList from "./DropdownList";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => setSearchOpen((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenuAndSearch = () => {
    setShowMenu(false);
    setSearchOpen(false);
  };

  return (
    <nav className={`${searchOpen ? "search-active" : ""}`}>
      <div className="nav-left">
        <div className="drop-container">
          <Link to="/on-the-top">on the top</Link>
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
      <Link to="/" className="logo">
        Luxe-Vogue
      </Link>
      <div className="nav-right">
        <Link to="/login">Account</Link>
        <Link onClick={toggleSearch}>Search</Link>
        <Link onClick={toggleMenu}>Cart (0)</Link>
      </div>
      <DropdownList />
      <Search isOpen={searchOpen} onClose={closeMenuAndSearch} />
      <Cart isOpen={showMenu} onClose={closeMenuAndSearch} />

      {/* overlay */}
      <div
        className={`overlay ${showMenu || searchOpen ? "active" : ""}`}
        onClick={closeMenuAndSearch}
      />
    </nav>
  );
};

export default Navbar;
