import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, DialogContent, Grid, Tab, Tabs, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import MailIcon from '@mui/icons-material/Mail';
import TabPanel from '../tab/TabPanel';
import GrowTransition from '../../../../common/components/refs/GrowTransition';
import SendEmailForm from '../tab/email/SendEmailForm';
import CopyLink from '../tab/copy/CopyLink';

const SendModal = ({ onClose, open }) => {
  const [tab, setTab] = useState(0);

  return (
    <Dialog
      fullWidth
      TransitionComponent={GrowTransition}
      keepMounted
      onClose={onClose}
      open={open}
    >
      <DialogTitle>Send form</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography variant="answer">Send Via</Typography>
          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab icon={<LinkIcon />} aria-label="Link" title="Generate Link" />
            <Tab icon={<MailIcon />} aria-label="Mail" title="Send Email" />
          </Tabs>
        </Box>
        <Grid sx={{ mx: -3, px: 0 }}>
          <TabPanel value={tab} index={0}>
            <CopyLink />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <SendEmailForm onClose={onClose} />
          </TabPanel>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

SendModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SendModal;
