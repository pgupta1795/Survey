import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const useImage = () => {
  const [image, setImage] = useState();

  const onChange = (e) => {
    console.log(e.target);
    setImage(e.target.files[0]);
  };

  const field = (
    <TextField
      type="file"
      onChange={onChange}
      inputProps={{
        style: {
          height: '3rem',
        },
        accept: 'image/*',
      }}
    />
  );

  return [image, field];
};

export default useImage;
