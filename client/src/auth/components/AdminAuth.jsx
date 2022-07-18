import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { isAdminUser } from '../services/AuthService';

const AdminAuth = () => {
  const navigate = useNavigate();
  return isAdminUser() ? <Outlet /> : navigate(-1);
};

export default AdminAuth;
