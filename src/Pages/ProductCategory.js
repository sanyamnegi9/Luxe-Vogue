import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../Components/Product/ProductCard";
import Loading from "../Components/Loading";

const ProductCategory = () => {
  // get the product id from the url
  const { productCategory } = useParams();
  const { products } = useContext(ProductContext);


  if (!productCategory) {
    return <Loading />;
  }

  // get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.category === productCategory;
  });

  return (
    <section className="products-section">
      <div className="heading">
        <h2>{productCategory}</h2>
      </div>
      <div className="blog-items-container">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
