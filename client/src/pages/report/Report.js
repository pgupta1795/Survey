import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CenteredGridBox from '../../common/components/card/CenteredGridBox';
import BasicUserForm from '../../common/components/form/BasicUserForm';
import { getError, getStatus } from '../../features/forms';
import useFormById from '../../hooks/useFormById';
import useResponseByCompany from '../../hooks/useResponseByCompany';
import ReportView from './components/views/ReportView';

const Report = ({ display }) => {
  const { formId } = useParams();
  useFormById(formId);
  useResponseByCompany(formId);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  if (status === 'loading') return <CircularProgress />;
  if (status === 'failed') return <div>{error}</div>;

  return (
    <BasicUserForm>
      <CenteredGridBox key={formId}>
        <ReportView display={display} />
      </CenteredGridBox>
    </BasicUserForm>
  );
};

Report.defaultProps = {
  display: 'block',
};

Report.propTypes = {
  display: PropTypes.string,
};
export default Report;
