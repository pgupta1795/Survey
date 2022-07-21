import React, { useContext, useState } from 'react';
import FullTextField from '../common/components/field/FullTextField';
import DeleteSection from '../pages/form/components/button/DeleteSection';
import { Add, Save } from '../pages/form/components/tab';
import { UserFormContext } from './contexts';

const useFormNameAndActions = () => {
  const formData = useContext(UserFormContext);
  const [formName, setFormName] = useState(formData?.name);
  return [
    <FullTextField
      variant="standard"
      sx={{
        mb: 5,
      }}
      value={formName}
      onChange={(e) => {
        setFormName(e.target.value);
      }}
    />,
    <div className="section-commands">
      <Save formName={formName} />
      <Add />
      <DeleteSection />
    </div>,
  ];
};

export default useFormNameAndActions;
