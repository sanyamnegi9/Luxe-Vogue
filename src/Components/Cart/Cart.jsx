import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = ({ isOpen, onClose }) => {
  const { cart, ClearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-heading">
        <h2>Cart</h2>
        <Link onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </Link>
      </div>
      <div className="cart-items-container">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="clear-cart">
        <div>{`Total: $ ${parseFloat(total).toFixed(2)}`}</div>
        <Link onClick={ClearCart}>
          <FontAwesomeIcon icon={faTrash} size="lg"/>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
