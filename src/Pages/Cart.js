import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CartItemCard from "../Components/CartItemCard";

const Cart = () => {
  const { cart, ClearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div className="w-full max-w-[82rem] mx-auto flex flex-col gap-8 mb-8 px-4">
      <h2 className=" text-[2.3rem] text-center">Cart</h2>
      <div className="relative w-full flex flex-col md:flex-row sm:mx-auto gap-4">
        {/* card container */}
        <div className="flex flex-col w-full md:w-[70%] justify-center gap-10 py-4 px-4">
          {cart.map((item) => {
            return <CartItemCard item={item} key={item.id} />;
          })}
        </div>

        {/* subtotal container */}
        <div className="sticky bottom-0 md:top-[5rem] bg-background-sec h-fit w-full md:w-[30%] px-3 py-4">
          <p className="text-sm md:text-base font-bold mb-4">
            Total ({itemAmount} items): $ {parseFloat(total).toFixed(2)}
          </p>
          <Link className="btn primary-btn w-full px-2 sm:text-[.8rem]">
            Place order
          </Link>
          <Link
            className="btn primary-btn w-full px-2 sm:text-[.8rem] mt-3"
            onClick={() => ClearCart()}
          >
            Clear Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
