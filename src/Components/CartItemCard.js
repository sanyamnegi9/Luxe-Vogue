import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // destructure items
  const { id, image, title, category, price, rating, amount } = item;

  return (
    <div className="relative h-[10rem] w-full flex gap-2 bg-background-sec">
      <div className="h-[10rem] w-[10rem] bg-white group">
        <img
          src={image}
          alt={category}
          className="h-full w-full object-contain group-hover:scale-[.9]"
        />
      </div>
      <div className="w-full mr-2 p-2">
        <h3 className="text-base">{title.slice(0, 55)}</h3>
        <p className="text-sm capitalize mb-2">{category.slice(0, 50)}</p>
        <p className="text-[.85rem] font-medium uppercase">
          Seller: Buzz india
        </p>
        <h3 className="text-base font-medium mt-2">$ {price}</h3>

        <div className="flex gap-2 mb-4 mt-2 w-fit items-center justify-center px-1 h-[1.65rem] border-[1px] border-border-color">
          <button
            onClick={() => increaseAmount(id)}
            className="focus:scale[.9] border-r-[1px] border-border-color pr-1"
          >
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
          <input
            type="number"
            value={amount}
            onChange={amount}
            className="w-[1.5rem] bg-transparent appearance-none text-center outline-none"
          />
          <button
            onClick={() => decreaseAmount(id)}
            className="focus:scale[.9] border-l-[1px] border-border-color pl-1"
          >
            <FontAwesomeIcon icon={faMinus} size="lg" />
          </button>
        </div>
        <Link
          onClick={removeFromCart()}
          className="absolute bottom-3 right-5 underline h-fit"
        >
          Remove Item
        </Link>
      </div>
    </div>
  );
};

export default CartItemCard;
