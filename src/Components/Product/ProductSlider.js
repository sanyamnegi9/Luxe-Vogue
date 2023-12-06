import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image from "../../Assets/product1.jpg";

const ProductSlider = ({ heading, category }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // // get products from product context
  // const { products } = useContext(ProductContext);

  // // get only men's & women's clothing category
  // const filteredProducts = products.filter((item) => {
  //   return item.category === category;
  // });

  return (
    <div className=" w-[90%] max-w-[85rem] flex flex-col items-center justify-center gap-4 mx-auto  my-4">
      <h2 className=" font-bold text-2xl capitalize text-[#52301C]">
        {heading}
      </h2>
      <Carousel responsive={responsive}>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
        <div className=" h-40 w-20">
          <img src={image} alt="product-title" className="w-full h-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
