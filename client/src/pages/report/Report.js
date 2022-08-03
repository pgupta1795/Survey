import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CenteredGridBox from '../../common/components/card/CenteredGridBox';
import useFormById from '../../hooks/useFormById';
import useResponseByCompany from '../../hooks/useResponseByCompany';
import ReportView from './components/views/ReportView';
import BasicUserForm from '../../common/components/form/BasicUserForm';
import './styles/Report.css';
import { data } from '../../features/response';

const Report = ({ display, pUserId }) => {
  const { formId, userId } = useParams();
  const cFormData = useFormById(formId);
  const resData = useResponseByCompany(formId, pUserId || userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(data({ responseData: resData, formData: cFormData }));
  }, [cFormData, resData]);

  return (
    <BasicUserForm>
      <CenteredGridBox key={formId}>
        {cFormData && resData ? (
          <ReportView display={display} />
        ) : (
          <CircularProgress />
        )}
      </CenteredGridBox>
    </BasicUserForm>
  );
};
Report.defaultProps = {
  pUserId: null,
  display: 'block',
};

Report.propTypes = {
  pUserId: PropTypes.string,
  display: PropTypes.string,
};
export default Report;
