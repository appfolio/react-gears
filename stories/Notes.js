import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Note, Notes } from '../src';


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
  .addWithInfo('With notes prop', () => (
    <Notes
      notes={notes}
      onAdd={() => alert('Add')}
      onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
      onDownload={() => alert('Download')}
      onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
      onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
    />
  ))
  .addWithInfo('With children', () => (
    <Notes
      onAdd={() => alert('Add')}
      onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
      onDownload={() => alert('Download')}
      onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
      onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
    >
      {notes.map(note => (
        <Note
          note={note}
          onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
          onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
          onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
        />
      ))}
    </Notes>
  ));
