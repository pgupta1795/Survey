import React, { useContext } from 'react';
import { UserFormContext } from '../../../../hooks/contexts';

const ResponseTab = () => {
  const form = useContext(UserFormContext);
  console.log(form);
  return <div>ResponseTab</div>;
};

export default ResponseTab;
