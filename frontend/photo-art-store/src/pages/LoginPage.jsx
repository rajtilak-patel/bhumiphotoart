// LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const handleLogin = (e) => {
        e.preventDefault();
    // Perform login logic here
    console.log('Logging in:', email, password);
    // In a real app, you'd authenticate the user with a backend API
    const fakeUser = { email,password };
    dispatch(loginUser(fakeUser));
    navigate('/'); // Redirect to the home page or wherever after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{' '}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/signup')}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};


export default LoginPage;
