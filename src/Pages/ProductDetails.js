import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Loading from "../Components/Loading";
import { Rating } from "@mui/material";

const ProductDetails = () => {
  // get the product id from the url
  const { productId, productTitle } = useParams();
  const { products } = useContext(ProductContext);
  // const { addToCart } = useContext(CartContext);

  // get the single product based on the id

  const product = products.find((item) => {
    return item.id === productId || item.title === productTitle;
  });

  // if product is not found
  if (!product) {
    return <Loading/>;
  }
 

  // destructure product
  const { title, price, description, image, category, rating } = product;
  const { rate, count } = rating;

  return (
    <section className="mx-4">
      <div className="w-full md:w-20rem h-20rem">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div>
        <h2>{title}</h2>
        <div>{price}</div>
        <div>{description}</div>
        <p>{category}</p>
        <Rating name="read-only" value={rate} readOnly />
        <div>{count}</div>
      </div>
    </section>
  );
};

export default ProductDetails;
