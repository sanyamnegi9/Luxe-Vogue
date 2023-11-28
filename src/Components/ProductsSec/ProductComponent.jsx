import React from "react";
import ProductCard from "./ProductCard";
import "./ProductComponent.scss";
import { productDetails } from "../../Data";
import { Link } from "@mui/material";

const ProductComponent = () => {
  return (
    <>
      {productDetails
        .slice(0, 2)
        .map(({ category_id, category_name, products }) => (
          <div className="category" id={category_id}>
            <h2>{category_name}</h2>
            <div className="products-container">
              {products
                .slice(0, 7)
                .map(({ id, img, brand, name, price }, index) => (
                    <ProductCard
                      id={id}
                      img={img}
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

export default ProductComponent;
