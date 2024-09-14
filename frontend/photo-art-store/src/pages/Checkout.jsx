import React, { useState } from 'react';
import { placeOrder } from '../api';

const Checkout = ({ cartItems, clearCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      userId: 'user_id_placeholder', // Replace with actual user ID if authentication is implemented
      products: cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
      })),
      totalAmount: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    placeOrder(orderData).then(() => {
      setSuccess(true);
      clearCart();
    });
  };

  if (success) {
    return <p>Order placed successfully!</p>;
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
