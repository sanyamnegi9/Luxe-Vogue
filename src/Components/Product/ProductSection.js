import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductSection = ({ heading, category }) => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.category === category;
  });

  return (
    <section className="products-section">
      <div className="heading">
        <h2>{heading}</h2>
      </div>
      <div className="blog-items-container">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
