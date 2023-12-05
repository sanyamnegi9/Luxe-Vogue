import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { id, image, title, price } = product;
  const { addToCart, setAddToCart } = useContext(CartContext);
  return (
    <Link to={`/products/${id}/${title}`} className="product-card" key={id}>
      <div className="img-container">
        <img src={image} alt={title} />
        <Link onClick={() => addToCart(product, id)}>
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
      <div className="product-details">
        <h4 className="product-title">{title}</h4>
        <p className="product-price">{`$ ${price}`}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
