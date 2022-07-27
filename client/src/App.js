import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Router from './router/Router';
import { darkTheme, lightTheme } from './app/theme';
import './App.css';

const App = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ToastContainer />
      <div className="App">
        <CssBaseline />
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
