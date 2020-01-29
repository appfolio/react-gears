import React from 'react';
import { storiesOf } from '@storybook/react';
import { DragAndDropGrid, Card, CardBody, CardHeader } from '../src/index';

storiesOf('DragAndDropGrid', module)
  .add('Live example', () => {
    let items = [
      [
        { id: 1, content: <Card><CardHeader>Ice Bear</CardHeader><CardBody>Ice bear has decided. Not into hibernation.</CardBody></Card> },
        { id: 2, content: <Card><CardHeader>Panda</CardHeader><CardBody>I'm not fat. I just love to eat.</CardBody></Card> },
        { id: 3, content: <Card><CardHeader>Grizz</CardHeader><CardBody>Hello, my name is Grizzly! We're here to be internet famous.</CardBody></Card> },
      ],
      [
        { id: 4, content: <Card><CardHeader>Charlie</CardHeader><CardBody>No way... Cheese Poofies? How'd you know they're my favorite snack!?</CardBody></Card> },
        { id: 5, content: <Card><CardHeader>Nom Nom</CardHeader><CardBody>GET OUT OF THE WAY! CUT!</CardBody></Card> },
        { id: 6, content: <Card><CardHeader>Chloe Park</CardHeader><CardBody>Actually, it's a college course. I skipped a couple of grades, so the jokes on you!</CardBody></Card> }
      ],
    ];

    const grid = 8;

    const getListStyle = () => {
      return {
        padding: grid,
        overflow: 'auto',
      };
    };

    const getItemStyle = () => {
      return {
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 ${grid}px 0 0`,
      };
    };

    const onReorder = (updatedItems) => {
      items = updatedItems;
    };

    return (
      <DragAndDropGrid items={items} gridStyle={getListStyle} itemStyle={getItemStyle} onReorder={onReorder} />
    );
  });
