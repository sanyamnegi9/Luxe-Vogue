import React, { useContext } from "react";
import "./CartPage.scss";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard";

const CartPage = () => {
  const { cart, ClearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className="cart-page">
      <h3>Cart</h3>
      <div>
        <div className="cart-items">
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </div>
        <div className="price-details"></div>
      </div>
      <div className="place-order">
        <div>Total: $ {1000}</div>
        <Link className="place-order-btn">Place order</Link>
      </div>
    </div>
  );
};

export default CartPage;
