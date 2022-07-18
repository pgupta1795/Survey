import { useEffect, useState } from 'react';
import { getReDirectPath } from '../auth/services/AuthService';

const useRedirectPath = () => {
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
  }, []);

  return redirectPath;
};

export default useRedirectPath;
