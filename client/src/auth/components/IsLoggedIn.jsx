import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getReDirectPath, isAuthenticated } from '../services/AuthService';

const IsLoggedIn = () => {
  const location = useLocation();
  const redirectPath = getReDirectPath();

  return isAuthenticated() && redirectPath ? (
    <Navigate to={redirectPath} state={{ path: location.pathname }} />
  ) : (
    <Outlet />
  );
};

export default IsLoggedIn;
