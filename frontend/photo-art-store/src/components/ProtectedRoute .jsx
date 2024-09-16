// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Or wherever you're managing your auth state

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user); // Get the authentication state

  return user ? (
    <Component {...rest} /> // Render the component if authenticated
  ) : (
    <Navigate to="/login" /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoute;
