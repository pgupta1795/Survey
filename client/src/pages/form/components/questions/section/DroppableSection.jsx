import React, { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { QuestionsContext } from '../form';
import CreateQuestions from '../form/CreateQuestions';

const DroppableSection = () => {
  const { section, setSections } = useContext(QuestionsContext);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const itemgg = [...section.questions];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = itemF;
        return sec;
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <CreateQuestions />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default React.memo(DroppableSection);
