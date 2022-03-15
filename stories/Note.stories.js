import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import { EditableNote, Note } from '../src';

const noteToEdit = {
  date: new Date(),
  from: 'Gary Thomas',
  text: 'Hello World',
};

export default {
  title: 'Note',
  component: Note,
};

export const LiveExample = () => {
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
      dateFormat={text('dateFormat', Note.defaultProps.dateFormat)}
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
};

export const WithChildren = () => {
  const note = {
    date: new Date(),
    deleted: boolean('deleted', false),
    edited: boolean('edited', false),
    editing: boolean('editing', false),
    from: text('from', 'Aaron Panchal'),
    text: text('text', 'Everybody wants to rule the world.'),
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
};

export const EditableNoteExample = () => {
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
};

export const EditableNoteWithChildren = () => {
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
      <span>Add an attachment: </span>
      <button disabled={saving} type="button">
        Choose file...
      </button>
      <hr />
    </EditableNote>
  );
};
