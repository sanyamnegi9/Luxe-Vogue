import React from "react";
import ProductCard from "./ProductCard";
import "../Styles/Products.scss";
import product3 from "../Assets/images/product3.jpg";

import { productDetails } from "../Data";

const Products = () => {
  return (
    <>
      {productDetails.map(({ category_id, category_name, products }) => (
        <div className="category" id={category_id}>
          <h2>{category_name}</h2>
          <div className="products-container">
            {products.map(({id, img, brand, name, price}) => (
              <ProductCard
                id={id}
                img={product3}
                brand={brand}
                title={name}
                price={price}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
