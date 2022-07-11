import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box, Divider, Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import {
  DragIcon,
  DeleteQuestion,
  MoreToolbar,
  CopyQuestion,
  PreviewQuestions,
  QuestionsContext,
  EditableQuestionsView,
  CreateQuestionsView,
} from './index';

const CreateQuestions = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const handleExpand = (i) => {
    const qs = [...questions];
    qs[i].open = true;
    setQuestions(qs);
  };

  return React.Children.toArray(
    questions.map((ques, i) => (
      <Draggable key={ques._id} draggableId={ques._id} index={i}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Box sx={{ mb: '15px' }}>
              <DragIcon />
              <Accordion
                onChange={() => handleExpand(i)}
                expanded={questions[i].open}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  elevation={1}
                  sx={{ width: '100%' }}
                >
                  {!ques?.open ? (
                    <CreateQuestionsView question={ques} questionIndex={i} />
                  ) : (
                    ''
                  )}
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
                  <MoreToolbar commands={[1, 2]} />
                </AccordionActions>
              </Accordion>
            </Box>
          </div>
        )}
      </Draggable>
    ))
  );
};

export default CreateQuestions;
