import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ResponseService from '../../pages/form/services/ResponseService';
import { RoutePaths } from '../../router';

export const getCurrentUser = () => {
  const ticket = localStorage.getItem('userTicket');
  if (!ticket) return null;
  const user = jwtDecode(ticket);
  return user;
};

export const setUserTicket = (token) => {
  localStorage.setItem('userTicket', JSON.stringify(token));
};

export const refresh = async () => {
  try {
    const userId = getCurrentUser()?.id;
    const response = await axios.get(`/user/refresh/${userId}`);
    console.log(response.data);
    if (!response.data || !response.data?.accessToken) {
      return;
    }
    setUserTicket(response.data.accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('userTicket');
  return !!token;
};

export const isAdminUser = () => {
  const user = getCurrentUser();
  const isAdmin = user?.admin;
  if (!isAdmin) alert('RESTRICTED URL');
  return isAdmin;
};

export const getReDirectPath = () => {
  const user = getCurrentUser();
  const isAdmin = user?.admin;
  const userForms = user?.createdForms;
  if (isAdmin) {
    return RoutePaths.DASHBAORD;
  }
  if (userForms) {
    return ResponseService.getViewFormUrl(userForms[0]);
  }
  return null;
};
