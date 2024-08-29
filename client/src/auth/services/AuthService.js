import axios from 'axios';
import jwtDecode from 'jwt-decode';
import toast from '../../app/toast';
import Constants from '../../helper/Constants';
import { RoutePaths } from '../../router';

export const getAuthHeader = () => {
  const auth = localStorage.getItem('userTicket');
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
};

export const getUserByTicket = (ticket) => {
  if (!ticket) return null;
  const user = jwtDecode(ticket);
  return user;
};

export const getCurrentUser = () => {
  const ticket = localStorage.getItem('userTicket');
  return getUserByTicket(ticket);
};

export const setUserTicket = (token) => {
  localStorage.setItem('userTicket', token);
};

export const refresh = async () => {
  try {
    const userId = getCurrentUser()?.id;
    if (!userId) {
      console.error(Constants.ERROR_NO_USER);
      toast.error(Constants.ERROR_NO_USER);
      return;
    }
    const response = await axios.get(
      `/api/user/refresh/${userId}`,
      getAuthHeader()
    );
    if (!response.data || !response.data?.accessToken) return;
    setUserTicket(response.data.accessToken);
  } catch (error) {
    console.error(error);
    toast.error(error);
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('userTicket');
  return !!token;
};

export const isAdminUser = () => {
  const user = getCurrentUser();
  const isAdmin = user?.admin;
  if (!isAdmin) console.warn(Constants.WARNING_INCORRECT_URL);
  return isAdmin;
};

export const getOrganization = () => {
  const user = getCurrentUser();
  return user?.organization;
};

export const getReDirectPath = () => RoutePaths.DASHBAORD;

export const getStoreTheme = () => localStorage.getItem('theme');

export const setStoreTheme = (theme) => localStorage.setItem('theme', theme);
