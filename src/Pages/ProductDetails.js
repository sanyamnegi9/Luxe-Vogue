import React, { useContext } from "react";
import "../Styles/Pages/ProductDetails.scss";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Loading from "../Components/Loading";

const ProductDetails = () => {
  // get the product id from the url
  const { productId, productTitle } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(productId) || item.title === productTitle;
  });

  // destructure product
  const { title, price, description, image } = product;

  // if product is not found
  if (!product) {
    return <Loading />;
  }

  return (
    <section>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>{price}</div>
      <div>{description}</div>
    </section>
  );
};

export default ProductDetails;
