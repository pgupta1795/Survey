import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import SpaceBetweenBox from '../../common/components/card/SpaceBetweenBox';
import BasicUserForm from '../../common/components/form/BasicUserForm';
import { fetchFormTypes } from '../../features/forms';
import FormToolbar from './components/toolbar/FormToolbar';
import FormService from './services/FormService';
import './styles/Form.css';

const CreateForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const { formId } = useParams();

  useEffect(() => {
    dispatch(fetchFormTypes());
  }, []);

  useEffect(() => {
    if (location.pathname === FormService.getResponseUrl(formId)) setTab(1);
    return () => {
      setTab(0);
    };
  }, [location.pathname]);

  return (
    <BasicUserForm key="create-form">
      <SpaceBetweenBox>
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
          sx={{ flexGrow: 1 }}
        >
          <Tab
            label="Questions"
            component={Link}
            to={`${FormService.getFormUrl(formId)}`}
            sx={{ color: '#454545' }}
          />
          <Tab
            label="Responses"
            component={Link}
            to={`${FormService.getResponseUrl(formId)}`}
            sx={{ color: '#454545' }}
          />
        </Tabs>
        <Box sx={{ flexGrow: 1 }} />
        <FormToolbar />
      </SpaceBetweenBox>
      <div>
        <Outlet />
      </div>
    </BasicUserForm>
  );
};

export default CreateForm;
