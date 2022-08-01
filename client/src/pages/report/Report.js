import { CircularProgress } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import CenteredGridBox from '../../common/components/card/CenteredGridBox';
import useFormById from '../../hooks/useFormById';
import useResponseByCompany from '../../hooks/useResponseByCompany';
import { BasicUserForm } from '../form/components/responding';
import ReportView from './components/views/ReportView';

const Report = ({ display }) => {
  const { formId } = useParams();
  const formData = useFormById(formId);
  const responseData = useResponseByCompany(formId);

  return (
    <BasicUserForm
      sx={{
        mt: 5,
      }}
    >
      <CenteredGridBox key={formId}>
        {formData && responseData ? (
          <ReportView
            formData={formData}
            responseData={responseData}
            display={display}
          />
        ) : (
          <CircularProgress />
        )}
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
