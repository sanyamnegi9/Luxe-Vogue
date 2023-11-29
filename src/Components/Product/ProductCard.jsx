import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductCard = ({ id, img, title, price, category }) => {
  return (
    <div className="product-card" key={id}>
      <div className="img-container">
        <img src={img} alt={title} />
        <Link>
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
      <div className="product-details">
        <h4 className="product-title">{title}</h4>
        <p className="product-price">{`$ ${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
