import Link from '@mui/material/Link';
import React from 'react';
import Brand from '../../../../helper/Brand';
import Constants from '../../../../helper/Constants';

const Copyright = (props) => (
  <div {...props} className="text-[0.5rem] text-darkslategray text-center mt-2">
    {Constants.COPYRIGHT}
    <Link color="inherit" href={Brand.URL}>
      {Brand.NAME}
    </Link>
    {new Date().getFullYear()}
  </div>
);

export default Copyright;
