import React from 'react';
import { Grid } from '@mui/material';
import {
  SaveQuestions,
  AddQuestion,
  ImageUploadModal,
  QuestionsContext,
  DroppableSection,
  HeaderSection,
  useCreateQuestions,
  CenteredGridBox,
} from './index';

const QuestionsTab = () => {
  const [
    questions,
    setQuestions,
    expandCloseAll,
    uploadImage,
    imageContextData,
    openUploadImagePop,
    setOpenUploadImagePop,
  ] = useCreateQuestions();

  return (
    <QuestionsContext.Provider
      value={{ questions, setQuestions, expandCloseAll, uploadImage }}
    >
      <CenteredGridBox>
        <HeaderSection />
        <Grid sx={{ paddingTop: '10px' }}>
          <div>
            <ImageUploadModal
              handleImagePopOpen={openUploadImagePop}
              handleImagePopClose={() => setOpenUploadImagePop(false)}
              contextData={imageContextData}
            />
            <DroppableSection />
            <div>
              <AddQuestion />
              <SaveQuestions />
            </div>
          </div>
        </Grid>
      </CenteredGridBox>
    </QuestionsContext.Provider>
  );
};

export default QuestionsTab;
