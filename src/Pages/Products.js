import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from '../Components/Product/ProductCard';

const Products = () => {
    const { products } = useContext(ProductContext);
  return (
    <section className="products-section">
      <div className="heading">
        <h2>Products</h2>
      </div>
      <div className="blog-items-container" style={{flexWrap: "wrap"}}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Products