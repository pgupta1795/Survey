import React from 'react';
import Brand from '../../../helper/Brand';

const Logo = () => (
  <div className="logo_brand">
    <a href={Brand.URL}>
      <img src={Brand.LOGO} alt="TECHNIA" />
    </a>
  </div>
);

export default Logo;
