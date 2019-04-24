import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { EditableNote, Note } from '../src';

const decription = `This component is used in conjunction with the "Notes" component to provide
  views for both the "edit" and "add" note features.

  If the note contains valid data,
  then a note header will be rendered, otherwise the header is omitted.  This behavior allows
  the component to be used for both "add" (no/minimal note data), or "edit" (with note data)
  views.

  This component also checks the "saving" property of the note in order to disable
  the controls and change the text on the "Save" button.`;

const noteToEdit = {
  date: new Date(),
  from: 'Gary Thomas',
  text: 'Hello World'
};

storiesOf('Note', module)
  .addWithInfo('Live example', () => {
    const note = {
      date: new Date(),
      deleted: boolean('deleted', false),
      edited: boolean('edited', false),
      editing: boolean('editing', false),
      from: text('from', 'Gary Thomas'),
      text: text('text', 'Goodbye Cruel World'),
      title: text('title', ''),
    };

    return (
      <Note
        note={note}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onDelete={action('onDelete')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        onUndelete={action('onUndelete')}
        rows={number('rows', Note.defaultProps.rows)}
        saving={boolean('saving')}
        saveLabel={text('saveLabel', EditableNote.defaultProps.saveLabel)}
        savingLabel={text('savingLabel', EditableNote.defaultProps.savingLabel)}
      />
    );
  })
  .addWithInfo('with children', () => {
    const note = {
      date: new Date(),
      deleted: boolean('deleted', false),
      edited: boolean('edited', false),
      editing: boolean('editing', false),
      from: text('from', 'Aaron Panchal'),
      text: text('text', 'Everybody wants to rule the world.')
    };

    return (
      <Note
        note={note}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onDelete={action('onDelete')}
        onEdit={action('onEdit')}
        onSave={action('onSave')}
        onUndelete={action('onUndelete')}
        rows={number('rows', Note.defaultProps.rows)}
        saving={boolean('saving')}
      >
        <img src="http://lorempixel.com/200/100/sports/" alt="Sample" />
      </Note>
    );
  })
  .addWithInfo('EditableNote with note prop', decription, () => {
    const withNote = boolean('with note', true);
    const note = withNote ? noteToEdit : { text: '' };

    return (
      <EditableNote
        note={note}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onSave={action('onSave')}
        saving={boolean('saving', false)}
      />
    );
  })
  .addWithInfo('EditableNote with children', decription, () => {
    const withNote = boolean('with note', true);
    const saving = boolean('saving', false);
    const note = withNote ? noteToEdit : { text: '' };

    return (
      <EditableNote
        note={note}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onSave={action('onSave')}
        saving={saving}
      >
        <span>Add an attachment:  </span>
        <button disabled={saving}>Choose file...</button>
        <hr />
      </EditableNote>
    );
  });

