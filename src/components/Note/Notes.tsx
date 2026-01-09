import React, { FC } from 'react';
import Note from './Note';
import { Note as NoteType } from './Note.types';

type NotesProps = {
  children?: React.ReactNode;
  className?: string;
  onCancel?: (note: NoteType) => void;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>, note: NoteType) => void;
  onDelete?: (note: Omit<NoteType, 'text'>) => void;
  onEdit?: (note: Omit<NoteType, 'text'>) => void;
  onSave?: (note: NoteType) => void;
  onUndelete?: (note: NoteType) => void;
  notes: (NoteType & { id: string; saving?: boolean })[];
};

const defaultProps = {
  className: '',
  // eslint-disable-next-line react/default-props-match-prop-types
  notes: [],
};

const Notes: FC<NotesProps> = ({
  className = defaultProps.className,
  notes = defaultProps.notes,
  children,
  onCancel,
  onChange,
  onDelete,
  onEdit,
  onSave,
  onUndelete,
}) => (
  <div className={className}>
    {children ||
      notes.map((note) => (
        <Note
          key={note.id ? `js-note-${note.id}` : undefined}
          note={note}
          onCancel={onCancel}
          onChange={onChange}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
          onUndelete={onUndelete}
          saving={note.editing && note.saving}
        />
      ))}
  </div>
);

Notes.displayName = 'Notes';
Notes.defaultProps = defaultProps;

export default Notes;
