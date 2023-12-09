import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Loading from "../Components/Loading";
import { Rating } from "@mui/material";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetails = () => {
  // get the product id from the url
  const { productId, productTitle } = useParams();
  const { products } = useContext(ProductContext);
  // const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  // get the single product based on the id

  const product = products.find((item) => {
    return item.id === productId || item.title === productTitle;
  });

  // if product is not found
  if (!product) {
    return <Loading />;
  }

  // destructure product
  const { title, price, description, image, category, rating } = product;
  const { rate, count } = rating;

  return (
    <section className="mx-4">
      <div className="w-full flex flex-col md:flex-row justify-center gap-8 mt-8 mb-12">
        <div className=" h-[30rem] w-full md:w-[50%] bg-white group">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain group-hover:scale-[.9]"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col md:px-3">
          <h3 className=" text-xl mb-1">{title}</h3>
          <p className=" capitalize mb-4">{category}</p>
          <div className="flex gap-2 items-center mb-4">
            <Rating name="read-only" value={rate} readOnly />
            <div className="text-[.82rem] font-medium">{`(${count})`}</div>
          </div>
          <div className=" text-lg font-medium mb-4">{`$ ${price}`}</div>
          <div className="flex gap-2 mb-4 w-fit items-center justify-center h-[2rem] px-1 border-[1px] border-border-color">
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="focus:scale[.9] border-r-[1px] border-border-color pr-1"
            >
              <FontAwesomeIcon icon={faPlus} size="xl" />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[3rem] bg-transparent appearance-none text-center outline-none"
            />
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="focus:scale[.9] border-l-[1px] border-border-color pl-1"
            >
              <FontAwesomeIcon icon={faMinus} size="xl" />
            </button>
          </div>
          <div className="mb-4 flex gap-4 flex-wrap justify-center md:justify-start">
            <Link className="btn primary-btn w-[12rem] px-4">Add to cart</Link>
            <Link className="btn primary-btn w-[12rem]">Buy now</Link>
          </div>
          <p className="text-[.95rem]">
            {" "}
            <span className=" font-semibold uppercase">Description: </span>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
