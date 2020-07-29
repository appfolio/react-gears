import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardText from './CardText';
import NoteHeader from './NoteHeader';
import DeletedNote from './DeletedNote';
import EditableNote, { EditableNoteDefaultProps } from './EditableNote';
import NoteType from './TypeHelpers/NoteType';

type NoteProps = {
  children?: React.ReactNode,
  className?: string,
  dateFormat?: string,
  showTimezone?: boolean,
  note: NoteType,
  onCancel: (note: NoteType) => void,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete?: (note: Omit<NoteType, 'text'>) => void,
  onEdit?: (note: Omit<NoteType, 'text'>) => void,
  onSave: (note: NoteType) => void,
  onUndelete?: (note: NoteType) => void,
  rows?: number,
  saving?: boolean,
  saveLabel?: React.ReactNode,
  savingLabel?: React.ReactNode
}

const defaultProps = {
  className: 'bg-white mb-3',
  dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
  showTimezone: true,
  rows: EditableNoteDefaultProps.rows,
  saving: EditableNoteDefaultProps.saving,
  saveLabel: EditableNoteDefaultProps.saveLabel,
  savingLabel: EditableNoteDefaultProps.savingLabel,
};

const Note: React.FunctionComponent<NoteProps> = ({
  children,
  className = defaultProps.className,
  dateFormat = defaultProps.dateFormat,
  showTimezone = defaultProps.showTimezone,
  rows = defaultProps.rows,
  saving = defaultProps.saving,
  saveLabel = defaultProps.saveLabel,
  savingLabel = defaultProps.savingLabel,
  note,
  onCancel,
  onChange,
  onDelete,
  onEdit,
  onSave,
  onUndelete
}) => {
  const { deleted, editing, text } = note;

  if (deleted) {
    return (
      <DeletedNote
        className={className}
        note={note}
        onUndelete={onUndelete}
      />);
  } else if (editing) {
    return (
      <EditableNote
        className={className}
        dateFormat={dateFormat}
        showTimezone={showTimezone}
        note={note}
        onCancel={onCancel}
        onChange={onChange}
        onSave={onSave}
        rows={rows}
        saving={saving}
        saveLabel={saveLabel}
        savingLabel={savingLabel}
      />);
  }
  return (
    <Card className={className}>
      <NoteHeader note={note} dateFormat={dateFormat} showTimezone={showTimezone} onDelete={onDelete} onEdit={onEdit} />
      <CardBody>
        <CardText style={{ whiteSpace: 'pre-wrap' }}>{text}</CardText>
        {children}
      </CardBody>
    </Card>
  );
};

Note.displayName = 'Note';

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dateFormat: PropTypes.string,
  showTimezone: PropTypes.bool,
  note: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    deleted: PropTypes.bool,
    editing: PropTypes.bool,
    from: PropTypes.string,
    errors: PropTypes.string,
    text: PropTypes.string.isRequired
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  onUndelete: PropTypes.func,
  rows: PropTypes.number,
  saving: PropTypes.bool,
  saveLabel: PropTypes.node,
  savingLabel: PropTypes.node
};

Note.defaultProps = defaultProps;

export default Note;
