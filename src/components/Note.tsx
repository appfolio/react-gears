import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardText from './CardText';
import NoteHeader from './NoteHeader.js';
import DeletedNote from './DeletedNote.js';
import EditableNote from './EditableNote.js';
import NoteType from './TypeHelpers/NoteType';

type NoteProps = {
  children?: React.ReactNode,
  className?: string,
  dateFormat?: string,
  showTimezone?: boolean,
  note: {
    deleted?: boolean,
    editing?: boolean,
    text: string,
  }
  onCancel: React.MouseEventHandler,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete?: Function,
  onEdit?: Function,
  onSave: React.MouseEventHandler,
  onUndelete?: (note: NoteType) => void,
  rows?: number,
  saving?: boolean,
  saveLabel?: React.ReactNode,
  savingLabel?: React.ReactNode
}

const Note: React.FunctionComponent<NoteProps> = ({
  children,
  className,
  dateFormat,
  note,
  onCancel,
  onChange,
  onDelete,
  onEdit,
  onSave,
  onUndelete,
  rows,
  saving,
  saveLabel,
  savingLabel,
  showTimezone
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
    deleted: PropTypes.bool,
    editing: PropTypes.bool,
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

Note.defaultProps = {
  className: 'bg-white mb-3',
  dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
  showTimezone: true,
  // @ts-ignore
  rows: EditableNote.defaultProps.rows,
  // @ts-ignore
  saving: EditableNote.defaultProps.saving,
  // @ts-ignore
  saveLabel: EditableNote.defaultProps.saveLabel,
  // @ts-ignore
  savingLabel: EditableNote.defaultProps.savingLabel,
};

export default Note;
