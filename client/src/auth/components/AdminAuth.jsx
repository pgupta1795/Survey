import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { isAdminUser } from '../services/AuthService';

const AdminAuth = () => {
  const isAdmin = isAdminUser();
  const navigate = useNavigate();
  return isAdmin ? <Outlet /> : navigate(-1);
};

export default AdminAuth;
