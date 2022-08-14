import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../auth/services/AuthService';
import { FormsCard } from '../pages/dashboard';

const useFormsByUser = () => {
  const [userFormIds, setUserFormIds] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
    const userForms = user.createdForms;
    setUserFormIds([...userForms]);
    return setUserFormIds([...userForms]);
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <FormsCard formId={null} />
      </Grid>
      {userFormIds.map((form) => {
        if (!form) return null;
        return (
          <Grid item key={`${form}`} xs={12} sm={6} md={4}>
            <FormsCard formId={form} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default useFormsByUser;
