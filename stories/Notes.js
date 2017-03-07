import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Notes } from '../src';


const notes = [
  {
    date: new Date(),
    edited: true,
    from: 'Gary Thomas',
    text: 'Hello World'
  },
  {
    date: new Date(),
    from: 'Aaron Panchal',
    text: 'Hello World as well!'
  },
  {
    date: new Date(),
    deleted: true,
    from: 'Gary Thomas',
    text: 'Goodbye Cruel World',
  }
];

storiesOf('Notes', module)
  .addWithInfo('Live example', () => (
    <Notes
      notes={notes}
      onDelete={note => alert('Delete: '+ JSON.stringify(note))}
      onEdit={note => alert('Edit: '+ JSON.stringify(note))}
      onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
    />
  ));
