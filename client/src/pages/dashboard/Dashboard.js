import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import useFormsByUser from '../../hooks/useFormsByUser';
import { CardHeader } from './index';
import { refresh } from '../../auth/services/AuthService';
import './styles/Dashboard.css';

const Dashboard = () => {
  const userForms = useFormsByUser();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <main className="dashboard-root">
      <CardHeader />
      <Container sx={{ py: 5 }} maxWidth="md">
        {userForms}
      </Container>
    </main>
  );
};

export default Dashboard;
