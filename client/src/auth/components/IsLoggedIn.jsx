import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getReDirectPath, isAuthenticated } from '../services/AuthService';

const IsLoggedIn = () => {
  const isLoggedIn = isAuthenticated();
  const redirectPath = getReDirectPath();

  return isLoggedIn && redirectPath ? (
    <Navigate to={redirectPath} />
  ) : (
    <Outlet />
  );
};

export default IsLoggedIn;
