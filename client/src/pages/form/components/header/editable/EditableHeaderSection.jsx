import React, { useContext } from 'react';
import EditableTextField from '../../options/editable/types/EditableTextField';
import { QuestionsContext } from '../../../../../hooks/contexts';

const EditableHeaderSection = () => {
  const { header, setHeader } = useContext(QuestionsContext);
  return (
    <>
      <EditableTextField
        placeholder="Header Text"
        sx={{ mb: 2 }}
        value={header?.title}
        onChange={(e) =>
          setHeader((prev) => ({
            description: prev.description,
            title: e.target.value,
          }))
        }
      />
      <EditableTextField
        placeholder="Header Description"
        sx={{ mb: 2 }}
        value={header?.description}
        onChange={(e) =>
          setHeader((prev) => ({
            description: e.target.value,
            title: prev.title,
          }))
        }
      />
    </>
  );
};

export default EditableHeaderSection;
