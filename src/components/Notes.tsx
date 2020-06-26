import PropTypes from 'prop-types';
import React from 'react';

import Note from './Note';
import NoteType from './TypeHelpers/NoteType';

type NotesProps = {
  children?: React.ReactNode,
  className?: string,
  onCancel: (note: NoteType) => void,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete?: (note: Omit<NoteType, 'text'>) => void,
  onEdit?: (note: Omit<NoteType, 'text'>) => void,
  onSave: (note: NoteType) => void,
  onUndelete?: (note: NoteType) => void,
  notes: (NoteType & { id: string, saving?: boolean, })[],
}

const defaultProps = {
  className: '',
  notes: []
};

const Notes: React.FunctionComponent<NotesProps> = ({
  className = defaultProps.className,
  notes = defaultProps.notes,
  ...props
}) => {
  const {
    children,
    onCancel,
    onChange,
    onDelete,
    onEdit,
    onSave,
    onUndelete
  } = props;

  return (
    <div className={className}>
      {children ||
        notes.map(note => (
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
        ))
      }
    </div>
  );
};

Notes.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  onUndelete: PropTypes.func,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      editing: PropTypes.bool,
      saving: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

Notes.defaultProps = defaultProps;

export default Notes;
