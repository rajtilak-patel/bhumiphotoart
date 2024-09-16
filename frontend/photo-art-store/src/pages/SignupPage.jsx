import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();



//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Perform signup logic here
//     console.log('Signing up:', name, email, password);
//     navigate('/login'); // Navigate to login after successful signup
//   };

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser({ email, password, name })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/cart'); // Redirect to cart page if signup is successful
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="mt-6" onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?{' '}
          <span className="text-green-600 cursor-pointer" onClick={() => navigate('/login')}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
