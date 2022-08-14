import axios from 'axios';
import jwtDecode from 'jwt-decode';
import toast from '../../app/toast';
import Constants from '../../helper/Constants';
import FormService from '../../pages/form/services/FormService';
import ResponseService from '../../pages/form/services/ResponseService';
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
      `/user/refresh/${userId}`,
      getAuthHeader()
    );
    console.log(response.data);
    if (!response.data || !response.data?.accessToken) {
      return;
    }
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
  if (!isAdmin) {
    console.error(Constants.WARNING_INCORRECT_URL);
    toast.warning(Constants.WARNING_INCORRECT_URL);
  }
  return isAdmin;
};

const getNormalUserPath = async () => {
  let formId;
  const pendingResponse = await ResponseService.getPendingResponse();
  if (pendingResponse) {
    formId = pendingResponse.formId;
  } else {
    const formToSubmit = await FormService.getForms(Constants.ANONYMOUS);
    formId = formToSubmit[0]?._id;
  }
  return ResponseService.getViewFormUrl(formId || '');
};

export const getReDirectPath = async () => {
  const user = getCurrentUser();
  const isAdmin = user?.admin;
  if (isAdmin) {
    return RoutePaths.DASHBAORD;
  }
  const normalUserPath = await getNormalUserPath();
  return normalUserPath;
};
