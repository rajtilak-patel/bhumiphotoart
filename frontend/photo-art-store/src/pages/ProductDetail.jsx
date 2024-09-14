import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';
import '../css/product.css';

import { addToCart, removeFromCart } from '../actions/cartActions';

import { useDispatch } from 'react-redux';
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();  // Hook to dispatch actions

  // Handle add to cart functionality
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));  // Dispatch the action with the product details
  };

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
    <div className="product-detail-container">
      <div className="product-detail">
        {/* Product image section */}
        <div className="product-image-container">
          <img className="product-image" src={product.imageUrl} alt={product.name} />
        </div>
        
        {/* Product information section */}
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <h2 className="product-price">${product.price}</h2>

          {/* Add to cart and buy now buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
