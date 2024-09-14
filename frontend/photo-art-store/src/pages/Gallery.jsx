import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';

const Gallery = () => {
  const [products, setProducts] = useState([]);
  
  console.log("products Rajtilak" );
  useEffect(() => {
    // Fetch product data from the backend
    fetchProducts().then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, []);

  return (
    <div>
      <h1>All Photos and Arts</h1>
      <div className="product-grid">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
