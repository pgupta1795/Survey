import React from 'react';
import logo from '../../../../assets/images/logo/TECHNIA.png';
import Brand from '../../../../helper/Brand';

const ReportLogo = () => (
  <div className="flex">
    <div className="scale-75">
      <a href={Brand.URL}>
        <img src={logo} alt="TECHNIA" width="200px" height="50px" />
      </a>
    </div>
  </div>
);

export default ReportLogo;
