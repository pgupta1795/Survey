import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { removeBlueBG } from '../../utils/CommonUtils';
import Footer from '../header/Footer';

const LoginLayout = ({ children }) => {
  useEffect(() => {
    removeBlueBG();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center min-h-[calc(100vh_-_var(--height-header)-_var(--height-footer))] mt-2 scale-[.95]">
        <Paper
          elevation={3}
          className="flex justify-self-center self-center flex-wrap max-sm:max-w-xs max-md:max-w-sm max-w-[28.19rem] min-h-[22rem] border-t-[1.13rem] rounded-t-10xs border-blue border-solid after:content-[''] after:w-[65.19rem] after:h-[2.56rem] after:block after:bg-footer after:bg-no-repeat after:bg-[bottom_0rem_left_-9.3rem]"
        >
          {children}
        </Paper>
      </div>
      <Footer />
    </>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
export default LoginLayout;
