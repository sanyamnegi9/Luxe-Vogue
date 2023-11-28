import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Cart = ({ isOpen, onClose }) => {
  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-heading">
        <h2>Cart</h2>
        <Link onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} size="xl"/>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
