import { Box, Grid, useTheme } from '@mui/material';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import StepperButton from '../../../../common/components/button/StepperButton';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function importAll(r) {
  return r.keys().map(r);
}

const importedImages = importAll(
  require.context(
    '../../../../assets/images/slider',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const ImageSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = importedImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <StepperButton
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            label="Next"
          />
        }
        backButton={
          <StepperButton
            onClick={handleBack}
            disabled={activeStep === 0}
            label="Back"
          />
        }
      />
    </Grid>
  );
};

export default ImageSlider;
