import React, { useContext } from "react";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // destructure items
  const { id, image, title, category, price, rating, amount } = item;
  return (
    <div className="cart-item-card">
      <Link className="img-container">
        <img src={image} alt={title} />
      </Link>
      <div className="card-details">
        <h5>{title}</h5>
        <div>
          <div className="quantity">
            <Link onClick={()=>increaseAmount(id)}>
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </Link>
            <p>{amount}</p>
            <Link onClick={()=>decreaseAmount(id)}>
              <FontAwesomeIcon icon={faMinus} size="lg" />
            </Link>
          </div>
          <div className="price">
            <p>{`$ ${parseFloat(price).toFixed(2)}`}</p>
          </div>
          <div className="item-total">
            <p>{`$ ${parseFloat(price * amount).toFixed(2)}`}</p>
          </div>
        </div>
      </div>
      <Link onClick={() => removeFromCart(id)} className="remove-card">
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </Link>
    </div>
  );
};

export default CartItem;
