import React, { useContext } from "react";
import "../Styles/Pages/ProductDetails.scss";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product){
    return (
      <section className="loading">
        Loading...
      </section>
    )
  }

  // destructure product
  const {title, price, description, image} = product;

  return <div>ProductDetails page</div>;
};

export default ProductDetails;
