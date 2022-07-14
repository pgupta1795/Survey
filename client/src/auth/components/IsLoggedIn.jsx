import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useRedirectPath from '../../hooks/useRedirectPath';
import { isAuthenticated } from '../services/AuthService';

const IsLoggedIn = () => {
  const isLoggedIn = isAuthenticated();
  const redirectPath = useRedirectPath();

  return isLoggedIn && redirectPath ? (
    <Navigate to={redirectPath} />
  ) : (
    <Outlet />
  );
};

export default IsLoggedIn;
