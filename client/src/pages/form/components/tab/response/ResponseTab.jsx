import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchOrganizations,
  getError,
  getStatus,
} from '../../../../../features/users';
import ChangeOrganization from '../../commands/ChangeOrganization';
import { BasicUserForm, CenteredGridBox } from '../index';
import OrganizationView from './view/OrganizationView';

const ResponseTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrganizations());
    }
  }, [dispatch, status, navigate]);

  if (status === 'loading') return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  return (
    <BasicUserForm>
      <CenteredGridBox>
        <OrganizationView />
        <ChangeOrganization />
      </CenteredGridBox>
    </BasicUserForm>
  );
};

export default ResponseTab;
