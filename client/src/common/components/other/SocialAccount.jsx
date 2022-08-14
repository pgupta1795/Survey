import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import YouTube from '@mui/icons-material/YouTube';
import { Stack } from '@mui/material';
import React from 'react';
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
