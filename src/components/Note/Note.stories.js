import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import EditableNote from './EditableNote';
import EditableNoteMentions from './EditableNoteMentions';
import Note from './Note';
import NoteMentions from './NoteMentions';

const noteToEdit = {
  date: new Date(),
  from: 'Gary Thomas',
  text: 'Hello World',
};

export default {
  title: 'Note',
  component: Note,
  parameters: {
    sourceLink: 'Note/Note.tsx',
  },
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

const mentionableUsers = [
  {
    key: 'Satoshi Nakamoto',
    value: 'Satoshi.Nakamoto',
    email: 'satoshi@appfolio.com',
  },
  {
    key: 'LeBron James',
    value: 'LeBron.James',
    email: 'lebron.james@appfolio.com',
  },
  {
    key: 'Barbra Streisand',
    value: 'Barbra.Streisand',
    email: 'barbra.streisand@appfolio.com',
  },
  {
    key: 'Barry Bonds',
    value: 'Barry.Bonds',
    email: 'barry.bonds@appfolio.com',
  },
];

export const NoteWithMentions = () => {
  const noteWithMentions = {
    date: new Date(),
    deleted: boolean('deleted', false),
    edited: boolean('edited', false),
    editing: boolean('editing', false),
    from: text('from', 'Tom Brady'),
    text: text('text', 'Hi @Satoshi.Nakamoto Who are you??? I lost all my crypto.'),
    title: text('title', ''),
  };

  return (
    <NoteMentions
      mentionableUsers={mentionableUsers}
      note={noteWithMentions}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onDelete={action('onDelete')}
      onEdit={action('onEdit')}
      onSetReminder={action('onSetReminder')}
      onSave={action('onSave')}
      onUndelete={action('onUndelete')}
      rows={number('rows', Note.defaultProps.rows)}
      saving={boolean('saving')}
    />
  );
};

export const EditableNoteWithMentions = () => {
  const [note, setNote] = useState({
    date: new Date(),
    from: 'Tom Brady',
    text: '',
  });

  const onNoteChange = (e) => {
    setNote({ ...note, text: e.target.value });
  };

  return (
    <EditableNoteMentions
      mentionableUsers={mentionableUsers}
      note={note}
      onCancel={action('onCancel')}
      onChange={onNoteChange}
      onSave={action('onSave')}
      saving={boolean('saving', false)}
    />
  );
};
