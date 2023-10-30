import React from "react";
import ProductCard from "./ProductCard";
import "../Styles/Products.scss";
import product1 from "../Assets/images/product1.jpg";

const Products = () => {
  return (
    <div className="products-container">
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top with this and that andasf fajsdkfj d"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
      <ProductCard
        id={"id"}
        img={product1}
        brand={"Levis"}
        title={"brand new top"}
        price="850"
      />
    </div>
  );
};

export default Products;
