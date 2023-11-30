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

  return (
    <div className="products-container">
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
