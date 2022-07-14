import React, { useState } from 'react';
import { Box, Divider, Accordion, IconButton, useTheme } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Visibility from '@mui/icons-material/Visibility';
import { HeaderSection } from '../responding';
import EditableHeaderSection from './editable/EditableHeaderSection';

const CreateHeaders = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const handleExpand = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        borderTop: `10px solid ${theme.palette.primary.main}`,
        borderRadius: 4,
        mb: 1,
      }}
    >
      <Accordion onChange={() => handleExpand()} expanded={open}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          elevation={1}
          sx={{ width: '100%' }}
        >
          {!open ? <HeaderSection /> : ''}
        </AccordionSummary>
        <AccordionDetails className="edit-question-options-view">
          <EditableHeaderSection />
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <IconButton aria-label="View" onClick={() => handleExpand()}>
            <Visibility color="primary" />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default CreateHeaders;
