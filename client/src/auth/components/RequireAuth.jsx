import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import RoutePaths from '../../helper/RoutePaths';
import { isAuthenticated } from '../services/AuthService';

const RequireAuth = () => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to={RoutePaths.LOGIN} state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
