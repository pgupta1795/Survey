import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from '../app/toast';
import ResponseService from '../pages/form/services/ResponseService';

const useResponseByCompany = (formId) => {
  const [response, setResponse] = useState();
  const location = useLocation();

  const fetch = async () => {
    try {
      const resData = await ResponseService.getResponseByCompany(formId);
      setResponse(resData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetch();
    return () => {
      setResponse();
    };
  }, [formId, location.pathname]);

  return response;
};

export default useResponseByCompany;
