import React, { useContext, useState } from 'react';
import { Grid } from '@mui/material';
import {
  SaveQuestions,
  AddQuestion,
  ImageUploadModal,
  QuestionsContext,
  DroppableSection,
  useCreateQuestions,
  CenteredGridBox,
} from './index';
import { UserFormContext } from '../../../../hooks/contexts';
import CreateHeaders from '../header/CreateHeaders';

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

  const formData = useContext(UserFormContext);
  const [header, setHeader] = useState({
    title: formData?.name,
    description: formData?.description,
  });

  return (
    <QuestionsContext.Provider
      value={{
        header,
        setHeader,
        questions,
        setQuestions,
        expandCloseAll,
        uploadImage,
      }}
    >
      <CenteredGridBox>
        <CreateHeaders />
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
