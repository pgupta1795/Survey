import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrganization } from '../auth/services/AuthService';
import {
  fetchResponseByFormAndUserId,
  getResponseData,
} from '../features/userResponse';
import { getCurrentOrganization } from '../features/users';

const useResponseByCompany = (formId) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const response = useSelector(getResponseData);
  const organization = useSelector(getCurrentOrganization);

  useEffect(() => {
    dispatch(
      fetchResponseByFormAndUserId({
        formId,
        organization: organization
          ? Object.keys(organization)[0]
          : getOrganization(),
      })
    );
  }, [formId, location.pathname, organization]);

  return response;
};

export default useResponseByCompany;
