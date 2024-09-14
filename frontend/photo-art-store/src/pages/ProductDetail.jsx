import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch specific product by ID
    fetchProductById(id).then((response) => {
      setProduct(response.data);
    }).catch((error) => {
      console.error('Error fetching product details:', error);
    });
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
