import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GrowTransition from '../../../../common/components/refs/GrowTransition';
import CopyLink from '../tab/copy/CopyLink';
import SendEmailForm from '../tab/email/SendEmailForm';
import TabPanel from '../tab/TabPanel';

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
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="question" sx={{ color: 'primary.main' }}>
            SEND FORM
          </Typography>
          <Grid sx={{ flexGrow: 1 }} />
          <IconButton onClick={onClose}>
            <CloseIcon color="primary" />
          </IconButton>
        </Box>
      </DialogTitle>
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
