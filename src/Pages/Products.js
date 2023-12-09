import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../Components/Product/ProductCard";
import { useParams } from "react-router-dom";

const Products = () => {
  const { productCategory } = useParams();
  const { products } = useContext(ProductContext);


  let heading = "Products";
  let showProducts = products;
  if (productCategory) {
    // get only men's & women's clothing category
    const filteredProducts = products.filter((item) => {
      return item.category === productCategory;
    });
    
    heading = productCategory;
    showProducts = filteredProducts;
  }
  return (
    <div className="flex flex-col gap-4 items-center mb-12 max-w-[90rem] w-[90%] mx-auto">
      <h2 className=" text-[2.3rem] mb-4">{heading}</h2>
      <div className="w-full h-[3rem] bg-border-color flex items-center px-6 py-1 gap-3 mb-3 rounded-lg">
        <div className=" h-full border-[1px] border-sec-text flex items-center px-2">
          {" "}
          sort
        </div>
        <div className=" h-full border-[1px] border-sec-text flex items-center px-2">
          filter
        </div>
        <div className=" h-full border-[1px] border-sec-text flex items-center px-2">
          {" "}
          etc.
        </div>
      </div>
      <div className="w-fit mx-auto flex gap-4 flex-wrap px-3 justify-around">
        {showProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
