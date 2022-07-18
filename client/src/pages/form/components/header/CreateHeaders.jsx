import React, { useContext, useState } from 'react';
import { Divider, Accordion, IconButton } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Visibility from '@mui/icons-material/Visibility';
import { HeaderSection } from '../responding';
import EditableHeaderSection from './editable/EditableHeaderSection';
import AddQuestions from '../button/AddQuestions';
import BasicSectionBox from '../basic/BasicSectionBox';
import { QuestionsContext } from '../tab';

const CreateHeaders = () => {
  const [open, setOpen] = useState(true);
  const { section, sections } = useContext(QuestionsContext);

  return (
    <BasicSectionBox section={section} sections={sections}>
      <Accordion onChange={() => setOpen((prev) => !prev)} expanded={open}>
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
          <IconButton
            aria-label="View"
            title="View"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Visibility color="primary" />
          </IconButton>
          <AddQuestions />
        </AccordionActions>
      </Accordion>
    </BasicSectionBox>
  );
};

export default CreateHeaders;
