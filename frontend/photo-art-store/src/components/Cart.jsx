import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import '../css/cartPage.css';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleRemoveFromCart = (id) => {
    console.log(id,"remove cart");
    dispatch(removeFromCart(id));
  };

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(addToCart({ ...item, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page-container">
      <div className="cart-items-section">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Price Summary Section */}
      <div className="price-summary-section">
        <h2 className="summary-title">Price Details</h2>
        <div className="summary-item">
          <span>Price ({cartItems.length} items)</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="summary-item">
          <span>Discount</span>
          <span className="discount-amount">-$0.00</span>
        </div>
        <div className="summary-item">
          <span>Delivery Charges</span>
          <span>Free</span>
        </div>
        <div className="summary-item total-amount">
          <span>Total Amount</span>
          <span>${calculateTotal()}</span>
        </div>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
