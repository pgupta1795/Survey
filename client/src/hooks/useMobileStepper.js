import MobileStepper from '@mui/material/MobileStepper';
import React, { useEffect, useState } from 'react';
import StepperButton from '../common/components/button/StepperButton';
import { topScroll } from '../common/components/layout/ScrollToTop';

const useMobileStepper = (dataArray, variant = 'dots') => {
  const [maxSteps, setMaxSteps] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    topScroll();
    setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    topScroll();
    setActiveStep((prev) => prev - 1);
  };
  const handleStepChange = (step) => setActiveStep(step);

  useEffect(() => {
    if (dataArray) setMaxSteps(dataArray?.length);
  }, [dataArray]);

  const BasicStepper = (
    <MobileStepper
      className="px-3 w-[28.19rem] max-sm:w-3/5"
      variant={variant}
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
          id="back-btn"
        />
      }
    />
  );

  return {
    activeStep,
    BasicStepper,
    maxSteps,
    handleBack,
    handleStepChange,
  };
};

export default useMobileStepper;
