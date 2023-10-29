import "../Styles/Products.scss";
import product1 from "../Assets/images/product1.jpg";
const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product1} alt="" />
      </div>
      <div className="product-info">
        <p className="brand-name">Evam eva</p>
        <p className="title">Cashmere High Neck Pullover Sweater</p>
        <p className="price">₹ 615.00</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
