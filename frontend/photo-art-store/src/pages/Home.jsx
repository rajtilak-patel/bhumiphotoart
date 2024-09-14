import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Featured Photos and Art</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
