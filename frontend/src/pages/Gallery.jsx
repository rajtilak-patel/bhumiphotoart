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
      <div className="my-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;
