import React from "react";
import Services from "../Services";
import "../../Styles/ProductPage.scss";
import { productDetails } from "../../Data";
import ProductCard from "./ProductCard";
import product_img from "../../Assets/images/clothing/product8.jpg";

const Products = () => {
  return (
    <>
      <div className="products-cont">
        {/* --main-product-details-- */}
        <div className="product-detail-disc">
          <div className="multi-img-container">
            <img src={product_img} alt="" />
            <img src={product_img} alt="" />
            <img src={product_img} alt="" />
            <img src={product_img} alt="" />
            <img src={product_img} alt="" />
          </div>
          <div className="main-img-container">
            <img src={product_img} alt="" />
          </div>
          <div className="product-info">
            <div className="prod-brand">Brand Name</div>
            <div className="prod-title">Title or name of the product</div>
            <div className="prod-price">$ 5000</div>
            <div className="color-container">
              <div className="prod-color">Color:</div>
              <button className="prod-color-btn">Black</button>
            </div>
            <div className="size-container">
              <div className="prod-size">Size:</div>
              <button className="prod-size-btn not-in-stock" id="">
                XS
              </button>
              <button className="prod-size-btn">S</button>
              <button className="prod-size-btn not-in-stock">M</button>
              <button className="prod-size-btn not-in-stock">L</button>
              <button className="prod-size-btn not-in-stock">XL</button>
            </div>
            <div className="prod-btn-container">
              <button className="prod-btn">Add to Cart</button>
              <button className="prod-btn">Buy now</button>
            </div>

            <div className="prod-desc">
              <h4>Product Details</h4>
              <div>
                White solid T-shirt, has a round neck, and long sleeves.
                Disclaimer: Please note that freebie shown in the image may
                differ and you may get any from an assorted collection of books,
                key-chains, stickers etc.
              </div>
            </div>
          </div>
        </div>
        {/* --more-related-products---- */}
        <div className="category">
          <h2>Related Products</h2>
          <div className="products-container">
            {productDetails[0].products
              .slice(0, 7)
              .map(({ id, img, brand, name, price }) => (
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
      </div>
      <Services />
    </>
  );
};

export default Products;
