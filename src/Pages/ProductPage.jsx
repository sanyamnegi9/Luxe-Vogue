import React from "react";
import "../Styles/ProductPage.scss";
import Services from "../Components/Services";
import CollectionProductCard from "../Components/CollectionProductCard";

const ProductPage = ({ id, name, desc, price, img }) => {
  return (
    <div className="product-container">
      <h2>Collections</h2>
      <div className="products-collection">
        <div className="toolbar">
          <div className="layout-switch">Grid buttons</div>
          <div> Filter</div>
        </div>
        <div className="collection-container">
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
          <CollectionProductCard />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ProductPage;
