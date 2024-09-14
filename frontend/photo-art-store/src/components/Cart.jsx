import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${calculateTotal()}</h2>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
