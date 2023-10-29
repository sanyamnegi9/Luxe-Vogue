import "../Styles/Products.scss";

const ProductCard = ({ id, img, brand, title, price }) => {
  return (
    <div className="product-card" id={id}>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <p className="brand-name">{brand}</p>
        <p className="title">{title}</p>
        <p className="price">{`₹ ${price}`}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
