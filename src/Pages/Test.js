import { useContext } from "react";
import ProductCard from "../Components/Product/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

const Test = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="relative flex items-center justify-center h-[100vh] ">
      {products.slice(0, 1).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Test;
