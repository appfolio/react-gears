import { action } from '@storybook/addon-actions';
import React from 'react';
import Note from './Note';
import Notes from './Notes';

const moreNotes = [
  {
    id: 1,
    date: new Date(),
    from: 'Aaron Panchal',
    text: 'Hello World as well!',
  },
  {
    id: 2,
    date: new Date(),
    from: 'Gary Thomas',
    text: 'Goodbye Cruel World',
  },
];

export default {
  title: 'Notes',
  component: Notes,
  parameters: {
    sourceLink: 'Note/Notes.tsx',
  },
};

export const WithNotesProp = ({ deleted, edited, editing, saving, ...args }) => {
  const notes = [
    {
      id: 0,
      date: new Date(),
      deleted,
      edited,
      editing,
      saving,
      from: 'Gary Thomas',
      text: 'Hello World',
    },
    ...moreNotes,
  ];

  return <Notes notes={notes} {...args} />;
};
WithNotesProp.args = {
  deleted: false,
  edited: false,
  editing: false,
  saving: false,
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onUndelete: action('onUndelete'),
};

export const WithChildren = ({ deleted, edited, editing, saving, ...args }) => {
  const notes = [
    {
      date: new Date(),
      deleted,
      edited,
      editing,
      saving,
      from: 'Gary Thomas',
      text: 'Hello World',
    },
    ...moreNotes,
  ];

  return (
    <Notes>
      {notes.map((note) => (
        <Note note={note} saving={note.saving} {...args} />
      ))}
    </Notes>
  );
};
WithChildren.args = {
  deleted: false,
  edited: false,
  editing: false,
  saving: false,
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onDelete: action('onDelete'),
  onEdit: action('onEdit'),
  onSave: action('onSave'),
  onUndelete: action('onUndelete'),
};
