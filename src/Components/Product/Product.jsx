import React, { useContext } from "react";
import "./Product.scss";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../contexts/ProductContext";

const Products = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  console.log(Products);
  return (
    <div className="products-container">
      {filteredProducts.slice(0, 5).map(({id, image, title, price, category}) => (
        <ProductCard
          id={id}
          img={image}
          title={title}
          price={price}
          category={category}
        />
      ))}
    </div>
  );
};

export default Products;
