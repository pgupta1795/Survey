import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Divider, Accordion, Grid } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import {
  DragIcon,
  DeleteQuestion,
  CopyQuestion,
  PreviewQuestions,
  QuestionsContext,
  EditableQuestionsView,
  CreateQuestionsView,
} from './index';

const CreateQuestions = () => {
  const { section, setSections } = useContext(QuestionsContext);

  const handleExpand = (i) =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions[i].open = true;
        return sec;
      })
    );

  return React.Children.toArray(
    section.questions.map((ques, i) => (
      <Draggable key={ques._id} draggableId={ques._id} index={i}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Grid key={ques._id} sx={{ mb: '15px' }}>
              <DragIcon />
              <Accordion
                onChange={() => handleExpand(i)}
                expanded={section.questions[i].open}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  elevation={1}
                  sx={{ width: '100%' }}
                >
                  {!ques?.open ? (
                    <CreateQuestionsView question={ques} questionIndex={i} />
                  ) : null}
                </AccordionSummary>
                <AccordionDetails className="edit-question-options-view">
                  <EditableQuestionsView question={ques} questionIndex={i} />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <PreviewQuestions questionIndex={i} />
                  <CopyQuestion questionIndex={i} />
                  <Divider orientation="vertical" flexItem />
                  <DeleteQuestion questionIndex={i} />
                </AccordionActions>
              </Accordion>
            </Grid>
          </div>
        )}
      </Draggable>
    ))
  );
};

export default CreateQuestions;
