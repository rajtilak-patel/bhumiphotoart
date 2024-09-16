import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart} from '../actions/cartActions';
import { getCartItems } from '../slices/cartSlice';
import '../css/cartPage.css';

// const Cart = () => {
  // const dispatch = useDispatch();
  //  // Get cart items and loading state from Redux
  //  const { cartItems, loading, error } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   // Fetch cart items when the component mounts
  //     dispatch(getCartItems());
  // }, [dispatch]);

  // const handleRemoveFromCart = (id) => {
  //   console.log(id,"remove cart");
  //   dispatch(removeFromCart(id));
  // };

  // const updateQuantity = (item, newQuantity) => {
  //   if (newQuantity > 0) {
  //     dispatch(addToCart({ ...item, quantity: newQuantity }));
  //   } else {
  //     dispatch(removeFromCart(item.id));
  //   }
  // };

  // const calculateTotal = () => {
  //   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };
//     cartItems.map((item)=>{
//        item.products.map((value)=>{
//         console.log(value._id, "data");
//         console.log(value.productId, "data");
//         console.log(value.quantity,"data");
//        });
//     });
//   return (
      
//     );
//   };
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not authenticated
    }
  }, [user, navigate]);

  // Get cart items and loading state from Redux
  const { cartItems, loading, error } = useSelector((state) => state.cart);

      useEffect(() => {
        // Fetch cart items when the component mounts
          dispatch(getCartItems());
      }, [dispatch]);

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

  return user ? (
    <div className="cart-page">
    <h1>Your Cart</h1>

    {/* {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : ( */}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.productId} className="cart-item">
            <p>{item.products._id} hello world</p>
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    {/* ) */}
    {/* } */}
  </div>
  ) : null;
};

export default Cart;
