import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Check if the user is authenticated
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-800">
              PhotoArt
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link to="/gallery" className="text-gray-800 hover:text-gray-600">
              Gallery
            </Link>

            {/* Conditional rendering based on authentication */}
            {user ? (
              <>
                <Link to="/cart" className="text-gray-800 hover:text-gray-600">
                  Cart
                </Link>
                {/* <Link to="/checkout" className="text-gray-800 hover:text-gray-600">
                  Checkout
                </Link> */}
                <button
                  onClick={handleLogout}
                  className="text-gray-800 hover:text-gray-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-800 hover:text-gray-600">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-800 hover:text-gray-600">
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className="block text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="block text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>

            {/* Conditional rendering for mobile menu based on authentication */}
            {user ? (
              <>
                <Link
                  to="/cart"
                  className="block text-gray-800 hover:text-gray-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cart
                </Link>
                {/* <Link
                  to="/checkout"
                  className="block text-gray-800 hover:text-gray-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Link> */}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block text-gray-800 hover:text-gray-600 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-800 hover:text-gray-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block text-gray-800 hover:text-gray-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
