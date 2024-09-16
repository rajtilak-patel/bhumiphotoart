// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
// import Cart from './components/Cart';
// import Checkout from './pages/Checkout';
// import Navbar from './components/Navbar';

// import './App.css';
// import Footer from './pages/Footer';
// import ProductDetails from './pages/ProductDetail';

// function App() {
//   const [cartItems, setCartItems] = React.useState([]);

//   const addToCart = (product) => {
//     const existingItem = cartItems.find((item) => item._id === product._id);
//     if (existingItem) {
//       setCartItems(
//         cartItems.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   // Function to update the quantity of a product in the cart
// const updateQuantity = (item, newQuantity) => {
//   // Check if the new quantity is valid (i.e., greater than 0)
//   if (newQuantity > 0) {
//     // If the quantity is valid, update it in the cart
//     const updatedCartItems = cartItems.map(cartItem =>
//       cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
//     );
//     // Set the updated cart items
//     setCartItems(updatedCartItems);
//   } else {
//     // If the new quantity is 0 or less, remove the item from the cart
//     removeFromCart(item.id);
//   }
// };

//   const removeFromCart = (id) => {
//     console.log(id,"Product id");
//     setCartItems(cartItems.filter((item) => item._id !== id));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Home Page Route */}
//         <Route path="/" element={<Home />} />

//         {/* Gallery Page Route */}
//         <Route path="/gallery" element={<Gallery />} />

//         {/* Product Detail Page Route */}
//         <Route
//           path="/product/:id"
//           element={<ProductDetails addToCart={addToCart} />}
//         />

//         {/* Cart Page Route */}
//         <Route
//           path="/cart"
//           element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}  updateQuantity={updateQuantity} />}
//         />

//         {/* Checkout Page Route */}
//         {/* <Route
//           path="/checkout"
//           element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
//         /> */}
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute ';

import './App.css';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        {/* Protect these routes */}
        <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
        <Route path="/checkout" element={<ProtectedRoute element={Checkout} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
