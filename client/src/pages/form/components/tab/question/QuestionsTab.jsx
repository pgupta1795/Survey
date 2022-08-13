import React, { useState } from 'react';
import { Grid } from '@mui/material';
import {
  ImageUploadModal,
  QuestionsContext,
  DroppableSection,
  useFormSections,
  CenteredGridBox,
  CreateHeaders,
  useFormNameAndActions,
} from '../index';
import BasicFormSkeleton from '../../basic/BasicFormSkeleton';
import useMobileStepper from '../../../../../hooks/useMobileStepper';

const QuestionsTab = () => {
  const [loading, setLoading] = useState(true);
  const [
    sections,
    setSections,
    expandCloseAll,
    uploadImage,
    imageContextData,
    openUploadImagePop,
    setOpenUploadImagePop,
  ] = useFormSections(setLoading);

  const [formNameField, formActions] = useFormNameAndActions();

  const { activeStep, BasicStepper, handleBack } = useMobileStepper(
    sections,
    'dots'
  );

  const updateImageLink = (link, context) => {
    link = link.replace('server', window.location.hostname);
    console.log(link);
    const section = JSON.parse(localStorage.getItem('section'));
    const optionsOfQuestion = [...section.questions];
    const i = context?.question;

    if (context.option == null) {
      optionsOfQuestion[i].image = link;
    } else {
      const j = context?.option;
      optionsOfQuestion[i].options[j].image = link;
    }
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = optionsOfQuestion;
        return sec;
      })
    );
    localStorage.removeItem('section');
  };

  if (loading) return <BasicFormSkeleton />;
  return (
    <div>
      {formNameField}
      <QuestionsContext.Provider
        key={sections[activeStep]?._id}
        value={{
          section: sections[activeStep],
          sections,
          setSections,
          expandCloseAll,
          uploadImage,
          handleBack,
        }}
      >
        <CenteredGridBox key={sections[activeStep]?._id}>
          <CreateHeaders />
          <Grid sx={{ pt: 1 }}>
            <ImageUploadModal
              handleImagePopOpen={openUploadImagePop}
              handleImagePopClose={() => setOpenUploadImagePop(false)}
              contextData={imageContextData}
              updateImageLink={updateImageLink}
            />
            <DroppableSection />
            {formActions}
          </Grid>
        </CenteredGridBox>
      </QuestionsContext.Provider>
      {BasicStepper}
    </div>
  );
};

export default QuestionsTab;
