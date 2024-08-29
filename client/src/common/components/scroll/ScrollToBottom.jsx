import { ArrowDownward } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../styles/scroll.css';

const ScrollToBottom = () => {
  const [showBottomBtn, setShowBottomBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 450) {
        setShowBottomBtn(true);
      } else {
        setShowBottomBtn(false);
      }
    });
  }, []);

  const gotToBottom = () => {
    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {showBottomBtn && (
        <Fab
          color="primary"
          sx={{ position: 'fixed' }}
          className="icon-style bottom-20 right-4 z-20"
          size="small"
          onClick={gotToBottom}
        >
          <ArrowDownward />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToBottom;
