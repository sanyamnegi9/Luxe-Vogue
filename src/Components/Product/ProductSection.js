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
    <section className="flex flex-col items-center gap-4">
        <h2>{heading}</h2>
      <div className="flex gap-4 flex-wrap">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
