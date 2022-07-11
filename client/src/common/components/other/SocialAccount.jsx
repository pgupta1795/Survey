import React from 'react';
import { LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Brand from '../../../helper/Brand';

const SocialAccount = () => (
  <Stack direction="row" spacing={1}>
    <a href={Brand.LINKEDIN} target="_blank" rel="noopener noreferrer">
      <LinkedIn sx={{ color: 'white' }} />
    </a>
    <a href={Brand.TWITTER} target="_blank" rel="noopener noreferrer">
      <Twitter sx={{ color: 'white' }} />
    </a>
    <a href={Brand.YOUTUBE} target="_blank" rel="noopener noreferrer">
      <YouTube sx={{ color: 'white' }} />
    </a>
  </Stack>
);

export default SocialAccount;
