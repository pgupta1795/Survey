import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useMobileStepper from '../../../../hooks/useMobileStepper';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const importAll = (r) => r.keys().map(r);

const importedImages = importAll(
  require.context(
    '../../../../assets/images/slider',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const ImageSlider = () => {
  const theme = useTheme();
  const { activeStep, BasicStepper, handleStepChange } =
    useMobileStepper(importedImages);

  return (
    <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {importedImages.map((step, index) => (
          <div key={JSON.stringify(step)}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {BasicStepper}
    </Grid>
  );
};

export default ImageSlider;
