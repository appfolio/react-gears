import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { EditableNote, Note, Notes } from '../src';

const description = 'The Notes component works in conjunction with other components.\n\nThe "Note" '
  + 'child component represents each note, and works in conjunction with "EditableNote" and '
  + 'DeletedNote components.\n\nFor the "addCntrol" property, it is recommended to use an '
  + 'instance of the "EditableNote" component, as demonstrated here.';

const moreNotes = [
  {
    id: 1,
    date: new Date(),
    from: 'Aaron Panchal',
    text: 'Hello World as well!'
  },
  {
    id: 2,
    date: new Date(),
    from: 'Gary Thomas',
    text: 'Goodbye Cruel World',
  },
];

storiesOf('Notes', module)
  .addWithInfo('With notes prop', description, () => {
    const adding = boolean('adding', false);
    const notes = [
      {
        id: 0,
        date: new Date(),
        deleted: boolean('deleted', false),
        edited: boolean('edited', false),
        editing: boolean('editing', false),
        from: 'Gary Thomas',
        text: 'Hello World'
      },
      ...moreNotes
    ];

    return (
      <Notes
        addControl={<EditableNote
          note={{}}
          onCancel={n => alert(`Cancel Add: ${JSON.stringify(n)}`)}
          onChange={() => console.log('Change Add')}
          onSave={n => alert(`Save Add: ${JSON.stringify(n)}`)}
        />}
        adding={adding}
        notes={notes}
        onAdd={() => alert('Add')}
        onCancel={n => alert(`Cancel: ${JSON.stringify(n)}`)}
        onChange={() => console.log('Change')}
        onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
        onDownload={() => alert('Download')}
        onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
        onSave={n => alert(`Save: ${JSON.stringify(n)}`)}
        onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
      />
    );
  })
  .addWithInfo('With children', description, () => {
    const adding = boolean('adding', false);
    const notes = [
      {
        date: new Date(),
        deleted: boolean('deleted', false),
        edited: boolean('edited', false),
        editing: boolean('editing', false),
        from: 'Gary Thomas',
        text: 'Hello World'
      },
      ...moreNotes
    ];

    return (
      <Notes
        addControl={<EditableNote
          note={{}}
          onCancel={n => alert(`Cancel Add: ${JSON.stringify(n)}`)}
          onChange={() => console.log('Change Add')}
          onSave={n => alert(`Save Add: ${JSON.stringify(n)}`)}
        />}
        adding={adding}
        onAdd={() => alert('Add')}
        onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
        onDownload={() => alert('Download')}
        onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
        onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
      >
        {notes.map(note => (
          <div>
            <Note
              note={note}
              onCancel={n => alert(`Cancel: ${JSON.stringify(n)}`)}
              onChange={() => console.log('Change')}
              onDelete={n => alert(`Delete: ${JSON.stringify(n)}`)}
              onEdit={n => alert(`Edit: ${JSON.stringify(n)}`)}
              onSave={n => alert(`Save: ${JSON.stringify(n)}`)}
              onUndelete={n => alert(`onUndelete: ${JSON.stringify(n)}`)}
            />
          </div>
        ))}
      </Notes>
    );
  });
