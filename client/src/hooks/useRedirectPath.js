import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getReDirectPath } from '../auth/services/AuthService';

const useRedirectPath = () => {
  const [redirectPath, setRedirectPath] = useState();
  const navigate = useNavigate();

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

  return redirectPath;
};

export default useRedirectPath;
