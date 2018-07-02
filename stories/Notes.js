import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { EditableNote, Note, Notes } from '../src';

const description = 'The Notes component works in conjunction with other components.\n\nThe "Note" '
  + 'child component represents each note, and works in conjunction with "EditableNote" and '
  + 'DeletedNote components.';

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
    const notes = [
      {
        id: 0,
        date: new Date(),
        deleted: boolean('deleted', false),
        edited: boolean('edited', false),
        editing: boolean('editing', false),
        saving: boolean('saving', false),
        from: 'Gary Thomas',
        text: 'Hello World'
      },
      ...moreNotes
    ];

    return (
      <Notes
        notes={notes}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onDelete={action('onDelete')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        onUndelete={action('onUndelete')}
      />
    );
  })
  .addWithInfo('With children', description, () => {
    const notes = [
      {
        date: new Date(),
        deleted: boolean('deleted', false),
        edited: boolean('edited', false),
        editing: boolean('editing', false),
        saving: boolean('saving', false),
        from: 'Gary Thomas',
        text: 'Hello World'
      },
      ...moreNotes
    ];

    return (
      <Notes>
        {notes.map(note => (
          <Note
            note={note}
            onCancel={action('onCancel')}
            onChange={action('onChange')}
            onDelete={action('onDelete')}
            onEdit={action('onEdit')}
            onSave={action('onSave')}
            onUndelete={action('onUndelete')}
            saving={note.saving}
          />
        ))}
      </Notes>
    );
  });
