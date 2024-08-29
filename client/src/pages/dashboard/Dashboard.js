import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../../auth/services/AuthService';
import Footer from '../../common/components/header/Footer';
import { fetchAllForms } from '../../features/forms';
import CreatedSurveys from './components/container/CreatedSurveys';
import MySurveys from './components/container/MySurveys';
import './styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllForms());
  }, [navigate]);

  return (
    <>
      <main className="h-full" key="dashboard-page">
        {isAdminUser() ? <CreatedSurveys /> : null}
        <MySurveys />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
