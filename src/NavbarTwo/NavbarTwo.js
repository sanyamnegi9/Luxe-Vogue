import { Link, NavLink } from "react-router-dom";
import "./NavbarTwo.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

const NavbarTwo = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav-two-container">
      <div className="logo">
        <Link to="/">Go-Cart</Link>
      </div>
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <ClearIcon style={{ fontSize: "2rem" }} />
        ) : (
          <MenuIcon style={{ fontSize: "2rem" }} />
        )}
      </div>
      <div className={`nav-links-container ${openMenu ? "open" : ""}`}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarTwo;
