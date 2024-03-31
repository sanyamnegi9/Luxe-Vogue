import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { id, image, title, price } = product;
  const { addToCart, setAddToCart } = useContext(CartContext);
  return (
    <Link
      to={`/products/${id}/${title}`}
      className=" bg-background-sec h-[20rem] w-full min-[458px]:w-[12rem] flex flex-col items-center gap-2"
      key={id}
    >
      <div className="relative w-[12rem] h-[13rem] bg-white group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-[.95]"
        />
        <Link
          onClick={() => addToCart(product, id)}
          className=" absolute bottom-2 right-2 hidden group-hover:block"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </Link>
      </div>
      <div className="px-1 flex flex-col justify-between gap-2 mb-2">
        <h4 className=" text-sm font-semibold">{`${title.slice(0, 40)}...`}</h4>
        <p className="font-medium">{`$ ${price}`}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
