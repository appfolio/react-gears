import { action } from '@storybook/addon-actions';
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

export const LiveExample = ({ deleted, edited, editing, from, text, title, ...args }) => {
  const note = {
    date: new Date(),
    deleted,
    edited,
    editing,
    from,
    text,
    title,
  };

  return <Note note={note} {...args} />;
};
LiveExample.args = {
  deleted: false,
  edited: false,
  editing: false,
  from: 'Gary Thomas',
  text: 'Goodbye Cruel World',
  title: '',
  dateFormat: Note.defaultProps.dateFormat,
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onUndelete: action('onUndelete'),
  rows: Note.defaultProps.rows,
  saving: undefined,
  saveLabel: EditableNote.defaultProps.saveLabel,
  savingLabel: EditableNote.defaultProps.savingLabel,
};

export const WithChildren = ({ deleted, edited, editing, from, text, ...args }) => {
  const note = {
    date: new Date(),
    deleted,
    edited,
    editing,
    from,
    text,
  };

  return (
    <Note note={note} {...args}>
      <img src="http://lorempixel.com/200/100/sports/" alt="Sample" />
    </Note>
  );
};
WithChildren.args = {
  deleted: false,
  edited: false,
  editing: false,
  from: 'Aaron Panchal',
  text: 'Everybody wants to rule the world.',
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onUndelete: action('onUndelete'),
  rows: Note.defaultProps.rows,
  saving: undefined,
};

export const EditableNoteExample = ({ withNote, ...args }) => {
  const note = withNote ? noteToEdit : { text: '' };

  return <EditableNote note={note} {...args} />;
};
EditableNoteExample.args = {
  withNote: true,
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onSave: action('onSave'),
  saving: false,
};

export const EditableNoteWithChildren = ({ withNote, ...args }) => {
  const note = withNote ? noteToEdit : { text: '' };

  return (
    <EditableNote note={note} {...args}>
      <span>Add an attachment: </span>
      <button disabled={args.saving} type="button">
        Choose file...
      </button>
      <hr />
    </EditableNote>
  );
};
EditableNoteWithChildren.args = {
  withNote: true,
  saving: false,
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onSave: action('onSave'),
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

export const NoteWithMentions = ({ deleted, edited, editing, from, text, title, ...args }) => {
  const noteWithMentions = {
    date: new Date(),
    deleted,
    edited,
    editing,
    from,
    text,
    title,
  };

  return <NoteMentions mentionableUsers={mentionableUsers} note={noteWithMentions} {...args} />;
};
NoteWithMentions.args = {
  deleted: false,
  edited: false,
  editing: false,
  from: 'Tom Brady',
  text: 'Hi @Satoshi.Nakamoto Who are you??? I lost all my crypto.',
  title: '',
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onUndelete: action('onUndelete'),
  rows: Note.defaultProps.rows,
  saving: undefined,
};

export const EditableNoteWithMentions = (args) => {
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
      onChange={onNoteChange}
      showMentionsEditNotificationWarning
      {...args}
    />
  );
};
EditableNoteWithMentions.args = {
  onCancel: action('onCancel'),
  onSave: action('onSave'),
  saving: false,
};

export const EditableNoteWithMentionsEditNotificationAlert = (args) => {
  const [note, setNote] = useState({
    date: new Date(),
    from: 'Tom Brady',
    text: 'Hey! @Satoshi.Nakamoto why did BTC drop 20% today?',
  });

  const onNoteChange = (e) => {
    setNote({ ...note, text: e.target.value });
  };

  return (
    <EditableNoteMentions
      mentionableUsers={mentionableUsers}
      note={note}
      onChange={onNoteChange}
      showMentionsEditNotificationWarning
      {...args}
    />
  );
};
EditableNoteWithMentionsEditNotificationAlert.args = {
  onCancel: action('onCancel'),
  onSave: action('onSave'),
  saving: false,
};
