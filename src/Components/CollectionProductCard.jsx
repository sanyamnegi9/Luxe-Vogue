import React from 'react'
import "../Styles/CollectionProductCard.scss"
import product_img from "../Assets/images/clothing/product3.jpg"

const CollectionProductCard = () => {
  return (
    <div className="collection-product-card">
      <div className="product-img">
        <img src={product_img} alt="not found" />
      </div>
      <div className="product-info">
        <p className="brand">Brand</p>
        <p className="title">Product title or name</p>
        <p className="price">{`₹ ${500}`}</p>
      </div>
    </div>
  );
}

export default CollectionProductCard