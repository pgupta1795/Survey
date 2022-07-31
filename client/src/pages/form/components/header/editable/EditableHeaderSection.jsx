import React, { useContext } from 'react';
import MultilineTextField from '../../../../../common/components/field/MultilineTextField';
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
      <MultilineTextField
        placeholder="Header Text"
        sx={{ mb: 2 }}
        value={section?.name}
        onInput={handleNameChange}
      />
      <MultilineTextField
        placeholder="Header Description"
        sx={{ mb: 2 }}
        value={section?.description}
        onInput={handleDescriptionChange}
      />
    </>
  );
};

export default EditableHeaderSection;
