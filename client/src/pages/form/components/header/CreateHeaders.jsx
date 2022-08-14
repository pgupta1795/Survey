import Visibility from '@mui/icons-material/Visibility';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import React, { useContext, useState } from 'react';
import BasicSectionBox from '../basic/BasicSectionBox';
import AddQuestions from '../button/AddQuestions';
import { QuestionsContext } from '../tab';
import EditableHeaderSection from './editable/EditableHeaderSection';
import HeaderSection from './noneditable/HeaderSection';

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
          <AddQuestions />
          <Divider orientation="vertical" flexItem />
          <IconButton
            aria-label="View"
            title="View"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Visibility color="primary" />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </BasicSectionBox>
  );
};

export default CreateHeaders;
