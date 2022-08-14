import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import toast from '../../../../../app/toast';
import FullTextField from '../../../../../common/components/field/FullTextField';
import useViewFormUrl from '../../../../../hooks/useViewFormUrl';
import { Constants } from '../../../../signup';

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
