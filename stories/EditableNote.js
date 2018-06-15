import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { EditableNote } from '../src';

const decription = 'This component is used in conjunction with the "Notes" component to provide '
  + 'views for both the "edit" and "add" note features.\n\nIf the note contains valid data, '
  + 'then a note header will be rendered, otherwise the header is omitted.  This behavior allows '
  + 'the component to be used for both "add" (no/minimal note data), or "edit" (with note data) '
  + 'views.\n\nThis component also checks the "saving" property of the note in order to disable '
  + 'the controls and change the text on the "Save" button.';

const noteToEdit = {
  date: new Date(),
  from: 'Gary Thomas',
  text: 'Hello World'
};

storiesOf('EditableNote', module)
  .addWithInfo('With note prop', decription, () => {
    const withNote = boolean('with note', true);
    const saving = boolean('saving', false);

    const note = withNote ? noteToEdit : { text: '' };
    note.saving = saving;

    return (
      <EditableNote
        note={note}
        onCancel={n => alert(`Cancel: ${JSON.stringify(n)}`)}
        onChange={() => console.log('Change')}
        onSave={n => alert(`Save: ${JSON.stringify(n)}`)}
      />
    );
  })
  .addWithInfo('With children', decription, () => {
    const withNote = boolean('with note', true);
    const saving = boolean('saving', false);

    const note = withNote ? noteToEdit : { text: '' };
    note.saving = saving;

    return (
      <EditableNote
        note={note}
        onCancel={n => alert(`Cancel: ${JSON.stringify(n)}`)}
        onChange={() => console.log('Change')}
        onSave={n => alert(`Save: ${JSON.stringify(n)}`)}
      >
        <span>Add an attachment:  </span><button disabled={saving}>Choose file...</button>
        <hr />
      </EditableNote>
    );
  });
