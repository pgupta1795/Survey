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
    <main className="dashboard-root" key="dashboard-page">
      <CardHeader />
      <Container sx={{ py: 4 }} maxWidth="md" className="card-container">
        {userForms}
      </Container>
    </main>
  );
};

export default Dashboard;
