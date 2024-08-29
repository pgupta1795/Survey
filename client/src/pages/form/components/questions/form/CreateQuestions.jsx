import { Accordion, Divider, Grid } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import AddCategory from '../commands/AddCategory';
import {
  CopyQuestion,
  CreateQuestionsView,
  DeleteQuestion,
  DragIcon,
  EditableQuestionsView,
  PreviewQuestions,
  QuestionsContext,
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
                className="relative"
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  elevation={1}
                  sx={{ width: '100%' }}
                >
                  {!ques?.open ? (
                    <>
                      <div className="absolute top-[0rem] left-[0rem] rounded-t-10xs rounded-b-none bg-blue w-full h-[0.81rem]" />
                      <CreateQuestionsView question={ques} questionIndex={i} />
                    </>
                  ) : null}
                </AccordionSummary>
                <AccordionDetails className="edit-question-options-view">
                  <div className="absolute top-[0rem] left-[0rem] rounded-t-10xs rounded-b-none bg-blue w-full h-[0.81rem]" />
                  <EditableQuestionsView question={ques} questionIndex={i} />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <AddCategory questionIndex={i} />
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
