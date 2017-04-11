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
      onDelete={note => alert('Delete: '+ JSON.stringify(note))}
      onDownload={() => alert('Download')}
      onEdit={note => alert('Edit: '+ JSON.stringify(note))}
      onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
    />
  ))
  .addWithInfo('With children', () => (
    <Notes
      onAdd={() => alert('Add')}
      onDelete={note => alert('Delete: '+ JSON.stringify(note))}
      onDownload={() => alert('Download')}
      onEdit={note => alert('Edit: '+ JSON.stringify(note))}
      onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
    >
      {notes.map(note => (
        <Note
          deleted={note.deleted}
          edited={note.edited}
          editing={note.editing}
          from={note.from}
          text={note.text}
          onDelete={note => alert('Delete: '+ JSON.stringify(note))}
          onEdit={note => alert('Edit: '+ JSON.stringify(note))}
          onUndelete={note => alert('onUndelete: '+ JSON.stringify(note))}
        />
      ))}
    </Notes>
  ));
