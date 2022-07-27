import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FullTextField from '../../../../../common/components/field/FullTextField';
import toast from '../../../../../app/toast';
import { Constants } from '../../../../signup';
import useViewFormUrl from '../../../../../hooks/useViewFormUrl';

const CopyLink = () => {
  const fullURL = useViewFormUrl();

  const copy = async () => {
    await navigator.clipboard.writeText(fullURL);
    toast.default(Constants.COPIED, {
      autoClose: 1000,
      position: 'bottom-left',
    });
  };

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="question">Link</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={copy}>
          <ContentCopyIcon color="primary" />
        </IconButton>
      </Stack>
      <FullTextField
        sx={{ mt: 1, my: 0, userSelect: 'all' }}
        value={fullURL}
        variant="standard"
      />
    </Stack>
  );
};

export default CopyLink;
