import React, { useContext } from 'react';
import EditableTextField from '../../options/editable/types/EditableTextField';
import { QuestionsContext } from '../../../../../hooks/contexts';

const EditableHeaderSection = () => {
  const { section, setSections } = useContext(QuestionsContext);

  const handleNameChange = (e) =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section?._id) return sec;
        sec.name = e.target.value;
        return sec;
      })
    );

  const handleDescriptionChange = (e) =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section?._id) return sec;
        sec.description = e.target.value;
        return sec;
      })
    );

  return (
    <>
      <EditableTextField
        placeholder="Header Text"
        sx={{ mb: 2 }}
        value={section?.name}
        onChange={handleNameChange}
      />
      <EditableTextField
        placeholder="Header Description"
        sx={{ mb: 2 }}
        value={section?.description}
        onChange={handleDescriptionChange}
      />
    </>
  );
};

export default EditableHeaderSection;
