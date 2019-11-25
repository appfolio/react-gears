import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ButtonToolbar from './ButtonToolbar';
import Card from './Card';
import CardBody from './CardBody';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';
import NoteHeader from './NoteHeader';

class EditableNote extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dateFormat: PropTypes.string,
    showTimezone: PropTypes.bool,
    note: PropTypes.shape({
      date: PropTypes.object,
      errors: PropTypes.string,
      text: PropTypes.string
    }),
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    rows: PropTypes.number,
    saving: PropTypes.bool,
    saveLabel: PropTypes.node,
    savingLabel: PropTypes.node
  };

  static defaultProps = {
    className: 'bg-white mb-3',
    dateFormat: 'ddd, MMMM D, YYYY "at" h:mm A',
    showTimezone: true,
    rows: 4,
    saving: false,
    saveLabel: 'Save',
    savingLabel: 'Saving...',
  };

  render() {
    const { children, className, dateFormat, note, onCancel, onChange, onSave, rows, saving, saveLabel, savingLabel, showTimezone } = this.props;
    const { date, errors, text } = note;

    return (
      <Card className={className}>
        {date && <NoteHeader note={note} dateFormat={dateFormat} showTimezone={showTimezone} />}
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
              onChange={event => onChange(event, note)}
            />
          </FormLabelGroup>
          {children}
          <ButtonToolbar className="mt-3 mb-0">
            <Button className="js-editable-note_save" color="primary" disabled={saving} onClick={() => onSave(note)}>
              {saving ? savingLabel : saveLabel}
            </Button>
            <Button className="js-editable-note_cancel" disabled={saving} onClick={() => onCancel(note)}>Cancel</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    );
  }
}
export default EditableNote;
