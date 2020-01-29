import React, { ReactNode } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface DragAndDropItem {
  id: string | number;
  content: ReactNode;
}

interface DragAndDropGridProps {
  items: DragAndDropItem[][];
  onReorder: (items: DragAndDropItem[][]) => void;
  gridStyle?: (isDraggingOver: boolean) => any;
  itemStyle?: (isDragging: boolean, style: any) => any;
}

const DragAndDropGrid = ({ items, onReorder, gridStyle = () => {}, itemStyle = () => {} }: DragAndDropGridProps) => {
  const onDragEnd = ({ source, destination } : any) => {
    // dropped outside the list
    if (!destination) {
      return;
    }

    const updatedItems = [...items];

    if (source.droppableId === destination.droppableId) {
      const droppableId = parseInt(source.droppableId, 10);
      const row = updatedItems[droppableId];
      const sourceItem = row[source.index];
      row[source.index] = row[destination.index];
      row[destination.index] = sourceItem;

      updatedItems[droppableId] = row;
    } else {
      const sourceDroppableId = parseInt(source.droppableId, 10);
      const destDroppableId = parseInt(destination.droppableId, 10);

      const sourceRow = updatedItems[sourceDroppableId];
      const destRow = updatedItems[destDroppableId];

      const [item] = sourceRow.splice(source.index, 1);
      destRow.splice(destination.index, 0, item);

      updatedItems[sourceDroppableId] = sourceRow;
      updatedItems[destDroppableId] = destRow;
    }

    onReorder(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} >
      {
        items.map((itemsRow, rowIndex) => (
          <Droppable droppableId={`${rowIndex}`} direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={gridStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {itemsRow.map((item, colIndex) => (
                  <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={colIndex}>
                    {(dragProvided, dragSnapshot) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        style={itemStyle(
                          dragSnapshot.isDragging,
                          dragProvided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))
      }
    </DragDropContext>
  );
};

export default DragAndDropGrid;
