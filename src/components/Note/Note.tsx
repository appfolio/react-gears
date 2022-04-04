import React, { type FC } from 'react';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardText from '../Card/CardText';
import DeletedNote from './DeletedNote';
import EditableNote, { EditableNoteDefaultProps } from './EditableNote';
import { type Note as NoteType } from './Note.types';
import NoteHeader from './NoteHeader';

type NoteProps = {
  children?: React.ReactNode;
  className?: string;
  dateFormat?: string;
  showTimezone?: boolean;
  note: NoteType;
  onCancel?: (note: NoteType) => void;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>, note: NoteType) => void;
  onDelete?: (note: Omit<NoteType, 'text'>) => void;
  onEdit?: (note: Omit<NoteType, 'text'>) => void;
  onSave?: (note: NoteType) => void;
  onUndelete?: (note: NoteType) => void;
  rows?: number;
  saving?: boolean;
  saveLabel?: React.ReactNode;
  savingLabel?: React.ReactNode;
};

const defaultProps = {
  className: 'mb-3',
  dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
  showTimezone: true,
  rows: EditableNoteDefaultProps.rows,
  saving: EditableNoteDefaultProps.saving,
  saveLabel: EditableNoteDefaultProps.saveLabel,
  savingLabel: EditableNoteDefaultProps.savingLabel,
};

const Note: FC<NoteProps> = ({
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
  onUndelete,
}) => {
  const { deleted, editing, text } = note;

  if (deleted) {
    return <DeletedNote className={className} note={note} onUndelete={onUndelete} />;
  }
  if (editing && onCancel && onChange && onSave) {
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
      />
    );
  }
  return (
    <Card className={className}>
      <NoteHeader
        note={note}
        dateFormat={dateFormat}
        showTimezone={showTimezone}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      <CardBody>
        <CardText style={{ whiteSpace: 'pre-wrap' }}>{text}</CardText>
        {children}
      </CardBody>
    </Card>
  );
};

Note.displayName = 'Note';

Note.defaultProps = defaultProps;

export default Note;
