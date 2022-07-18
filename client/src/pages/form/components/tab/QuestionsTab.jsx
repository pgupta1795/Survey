import React from 'react';
import { Grid } from '@mui/material';
import {
  ImageUploadModal,
  QuestionsContext,
  DroppableSection,
  useFormSections,
  CenteredGridBox,
  CreateHeaders,
  useFormNameAndActions,
} from './index';

const QuestionsTab = () => {
  const [
    sections,
    setSections,
    expandCloseAll,
    uploadImage,
    imageContextData,
    openUploadImagePop,
    setOpenUploadImagePop,
  ] = useFormSections();

  const [formNameField, formActions] = useFormNameAndActions();

  return (
    <div>
      {formNameField}
      {sections.map((section) => (
        <QuestionsContext.Provider
          key={section?._id}
          value={{
            section,
            sections,
            setSections,
            expandCloseAll,
            uploadImage,
          }}
        >
          <CenteredGridBox key={section?._id}>
            <CreateHeaders />
            <Grid sx={{ pt: 1 }}>
              <ImageUploadModal
                handleImagePopOpen={openUploadImagePop}
                handleImagePopClose={() => setOpenUploadImagePop(false)}
                contextData={imageContextData}
              />
              <DroppableSection />
              {formActions}
            </Grid>
          </CenteredGridBox>
        </QuestionsContext.Provider>
      ))}
    </div>
  );
};

export default QuestionsTab;
