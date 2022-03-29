import React from 'react';
import Button from '../Button/Button';
import ButtonToolbar from '../Button/ButtonToolbar';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import FormLabelGroup from '../Form/FormLabelGroup';
import Input from '../Input/Input';
import type NoteType from '../TypeHelpers/NoteType';
import NoteHeader from './NoteHeader';

type EditableNoteProps = {
  children?: React.ReactNode;
  className?: string;
  dateFormat?: string;
  showTimezone?: boolean;
  note: NoteType;
  onCancel: (note: NoteType) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>, note: NoteType) => void;
  onSave: (note: NoteType) => void;
  rows?: number;
  saving?: boolean;
  saveLabel?: React.ReactNode;
  savingLabel?: React.ReactNode;
};

export const EditableNoteDefaultProps = {
  className: 'bg-white mb-3',
  dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
  showTimezone: true,
  rows: 4,
  saving: false,
  saveLabel: 'Save',
  savingLabel: 'Saving...',
};

const EditableNote: React.FunctionComponent<EditableNoteProps> = ({
  className = EditableNoteDefaultProps.className,
  dateFormat = EditableNoteDefaultProps.dateFormat,
  showTimezone = EditableNoteDefaultProps.showTimezone,
  rows = EditableNoteDefaultProps.rows,
  saving = EditableNoteDefaultProps.saving,
  saveLabel = EditableNoteDefaultProps.saveLabel,
  savingLabel = EditableNoteDefaultProps.savingLabel,
  ...props
}) => {
  const { children, note, onCancel, onChange, onSave } = props;
  const { errors, text } = note;

  return (
    <Card className={className}>
      <NoteHeader note={note} dateFormat={dateFormat} showTimezone={showTimezone} />
      <CardBody>
        <FormLabelGroup feedback={errors} stacked>
          <Input
            autoFocus
            className="js-editable-note_text"
            disabled={saving}
            rows={rows}
            invalid={!!errors}
            type="textarea"
            value={text}
            onChange={(event) => onChange(event, note)}
          />
        </FormLabelGroup>
        {children}
        <ButtonToolbar className="mt-3 mb-0">
          <Button
            className="js-editable-note_save"
            color="primary"
            disabled={saving}
            onClick={() => onSave(note)}
          >
            {saving ? savingLabel : saveLabel}
          </Button>
          <Button
            className="js-editable-note_cancel"
            disabled={saving}
            onClick={() => onCancel(note)}
          >
            Cancel
          </Button>
        </ButtonToolbar>
      </CardBody>
    </Card>
  );
};

EditableNote.defaultProps = {
  className: EditableNoteDefaultProps.className,
  dateFormat: EditableNoteDefaultProps.dateFormat,
  showTimezone: EditableNoteDefaultProps.showTimezone,
  rows: EditableNoteDefaultProps.rows,
  saving: EditableNoteDefaultProps.saving,
  saveLabel: EditableNoteDefaultProps.saveLabel,
  savingLabel: EditableNoteDefaultProps.savingLabel,
};
EditableNote.displayName = 'EditableNote';
export default EditableNote;
