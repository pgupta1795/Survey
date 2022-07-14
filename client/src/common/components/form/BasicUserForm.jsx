import React, { Suspense } from 'react';
import { CircularProgress, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFormById from '../../../hooks/useFormById';
import { UserFormContext } from '../../../hooks/contexts';

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
