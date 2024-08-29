import { ArrowUpward } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../styles/scroll.css';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <Fab
          color="primary"
          sx={{ position: 'fixed' }}
          className="icon-style bottom-20 right-4 z-20"
          size="small"
          onClick={goToTop}
        >
          <ArrowUpward />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTop;
