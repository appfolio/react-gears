import React from 'react';
import { storiesOf } from '@storybook/react';
import { DragAndDropGrid } from '../src/index';

storiesOf('DragAndDropGrid', module)
  .add('Live example', () => {
    let items = [
      [{ id: 1, content: 'ice bear' }, { id: 2, content: 'panda' }],
      [{ id: 3, content: 'grizz' }, { id: 4, content: 'nomnom' }],
    ];

    const grid = 8;

    const getListStyle = (isDraggingOver) => {
      return {
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        overflow: 'auto',
      };
    };

    const getItemStyle = (isDragging) => {
      return {
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 ${grid}px 0 0`,

        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',
      };
    };

    const onReorder = (updatedItems) => {
      items = updatedItems;
    };

    return (
      <DragAndDropGrid items={items} gridStyle={getListStyle} itemStyle={getItemStyle} onReorder={onReorder} />
    );
  });
