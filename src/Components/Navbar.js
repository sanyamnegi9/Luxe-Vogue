import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const { itemAmount } = useContext(CartContext);

  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productCategories, setProductCategories] = useState([]);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav
      className={`sticky top-0 md:top-4 bg-transparent md:mx-8 px-4 md:px-6 mb-4 h-16 md:rounded-2xl flex items-center justify-between z-10 transition-all duration-300 ${
        scrolling && " backdrop-blur-lg"
      }`}
    >
      {/* mobile nav */}
      <Link onClick={() => setMenuOpen(true)} className="flex md:hidden">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </Link>
      <div
        className={`flex flex-col md:hidden px-[1.5rem] py-[1.25rem] absolute top-0 left-0 h-[100vh] min-w-[17rem] max-w-[17rem] w-100% z-[9] bg-background-sec ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          onClick={() => setMenuOpen(false)}
          className="h-fit flex justify-start mb-4"
        >
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </Link>

        <div className="flex flex-col gap-2 text-sec-text uppercase font-medium">
          {productCategories.slice(0, 4).map((category, index) => (
            <Link
              onClick={() => setMenuOpen(false)}
              to={`/${category}`}
              className=" px-4 py-2 hover:bg-border-color text-text"
              key={index + 1}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/">
        <h1>Luxe Vogue</h1>
      </Link>
      <div className="hidden md:flex relative gap-4 ">
        <Link className="focus:outline-none cursor-pointer text-[0.8rem] py-2 px-2 uppercase text-sec-text hover:text-text font-medium">
          Category
        </Link>

        <Link
          to="/login"
          className="py-2 px-2 text-[0.8rem] uppercase text-sec-text hover:text-text font-medium"
        >
          Account
        </Link>

        <Link
          to="/cart"
          className="py-2 px-2 text-[0.8rem] uppercase text-sec-text hover:text-text font-medium"
        >
          {`Cart (${itemAmount})`}
        </Link>
      </div>

      {/* mobile shopping cart */}
      <Link to="/cart" className="flex md:hidden ">
        <Badge badgeContent={itemAmount} color="success" className="text-text">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </nav>
  );
};

export default Navbar;
