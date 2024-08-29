import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { darkTheme, lightTheme } from './app/theme';
import ScrollToBottom from './common/components/scroll/ScrollToBottom';
import ScrollToTop from './common/components/scroll/ScrollToTop';
import Router from './router/Router';

const App = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ToastContainer />
      <div
        id="survey-app"
        className="mt-[var(--height-header)] min-h-[calc(100vh_-_var(--height-header)_-_var(--height-footer))] mb-[var(--height-footer)] bg-blue-x"
      >
        <CssBaseline />
        <ScrollToTop />
        <ScrollToBottom />
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
