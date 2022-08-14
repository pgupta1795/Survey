import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { UserFormContext } from '../../../hooks/contexts';
import useFormById from '../../../hooks/useFormById';

const BasicUserForm = ({ children, ...restProps }) => {
  const { formId } = useParams();
  const form = useFormById(formId);

  return (
    <main className="App" key={`create-form-${formId}`}>
      <Suspense>
        <Container maxWidth="md" {...restProps}>
          {form ? (
            <UserFormContext.Provider value={form}>
              {children}
            </UserFormContext.Provider>
          ) : (
            <div className="loading-form">
              <CircularProgress />
            </div>
          )}
        </Container>
      </Suspense>
    </main>
  );
};

BasicUserForm.propTypes = {
  children: PropTypes.any.isRequired,
};
export default BasicUserForm;
