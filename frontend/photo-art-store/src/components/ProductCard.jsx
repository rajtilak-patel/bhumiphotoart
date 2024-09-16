import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (

    <div className="border rounded-lg shadow-lg p-4">
      <Link to={`/product/${product._id}`}>
        <div className="text-center">
          <img
            className="w-full h-40 object-cover mb-2"
            src={product.imageUrl}
            alt={product.name}
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
