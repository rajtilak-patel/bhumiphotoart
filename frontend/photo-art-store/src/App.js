import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Gallery Page Route */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Product Detail Page Route */}
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />

        {/* Cart Page Route */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />

        {/* Checkout Page Route */}
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
