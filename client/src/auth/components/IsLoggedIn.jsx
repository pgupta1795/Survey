import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getReDirectPath, isAuthenticated } from '../services/AuthService';

const IsLoggedIn = () => {
  const isLoggedIn = isAuthenticated();
  const location = useLocation();
  const navigate = useNavigate();
  const [redirectPath, setRedirectPath] = useState();

  const fetchPath = async () => {
    const path = await getReDirectPath();
    setRedirectPath(path);
  };

  useEffect(() => {
    fetchPath();
    return () => {
      setRedirectPath('');
    };
  }, [navigate]);

  return isLoggedIn && redirectPath ? (
    <Navigate to={redirectPath} state={{ path: location.pathname }} />
  ) : (
    <Outlet />
  );
};

export default IsLoggedIn;
