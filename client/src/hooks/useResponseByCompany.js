import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from '../app/toast';
import ResponseService from '../pages/form/services/ResponseService';

const useResponseByCompany = (formId, userId) => {
  const [response, setResponse] = useState();
  const location = useLocation();

  const fetch = async () => {
    try {
      const resData = await ResponseService.getResponseByCompany(
        formId,
        userId
      );
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
  }, [formId, location.pathname, userId]);

  return response;
};

export default useResponseByCompany;
