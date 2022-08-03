import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from '../app/toast';
import { UserService } from '../pages/login/components/form';

const useOrganizations = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  const location = useLocation();

  const fetch = async () => {
    try {
      const resData = await UserService.getOrganizations();
      setResponse(resData.organizations);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
    return () => {
      setResponse();
    };
  }, [location.pathname]);

  return { loading, organizations: response };
};

export default useOrganizations;
