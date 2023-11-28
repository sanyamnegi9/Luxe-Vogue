import { Link, redirect } from "react-router-dom";
import "./ProductComponent.scss";
const ProductCard = ({ id, img, brand, title, price }) => {
  return (
    <>
      <Link className="product-card" id={id} to="..a/products">
        <div className="product-img">
          <img src={img} alt={title} />
        </div>
        <div className="product-info">
          <p className="brand-name">{brand}</p>
          <p className="title">{title}</p>
          <p className="price">{`₹ ${price}`}</p>
        </div>
        <div className="product-btn">
          <button className="cart-btn">Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
