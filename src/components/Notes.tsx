import PropTypes from 'prop-types';
import React from 'react';

import Note from './Note';
import NoteType from './TypeHelpers/NoteType';

type NotesProps = {
  children?: React.ReactNode,
  className?: string,
  onCancel: React.MouseEventHandler,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete?: Function,
  onEdit?: Function,
  onSave: React.MouseEventHandler,
  onUndelete?: (note: NoteType) => void,
  notes: {
    id: string,
    text: string,
    editing?: boolean,
    saving?: boolean,
  }[],
}

const Notes: React.FunctionComponent<NotesProps> = ({
  ...props
}) => {
  const { children, className, notes, onCancel, onChange,
    onDelete, onEdit, onSave, onUndelete } = props;

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
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      editing: PropTypes.bool,
      saving: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

Notes.defaultProps = {
  className: '',
  notes: []
};

export default Notes;
