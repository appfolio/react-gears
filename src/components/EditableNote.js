import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ButtonToolbar from './ButtonToolbar';
import Card from './Card';
import CardBlock from './CardBlock';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';
import NoteHeader from './NoteHeader';

class EditableNote extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    note: PropTypes.shape({
      date: PropTypes.object,
      errors: PropTypes.string,
      saving: PropTypes.bool,
      text: PropTypes.string
    }),
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: 'bg-white mb-3'
  };

  render() {
    const { className, note, onCancel, onChange, onSave } = this.props;
    const { date, errors, saving, text } = note;

    return (
      <Card className={className}>
        {date && <NoteHeader note={note} />}
        <CardBlock>
          <FormLabelGroup feedback={errors} stacked>
            <Input
              disabled={saving}
              ref="text"
              rows="4"
              state={errors && 'danger'}
              type="textarea"
              value={text}
              onChange={event => onChange(event, note)}
            />
          </FormLabelGroup>
          {children}
          <ButtonToolbar className="mt-3 mb-0">
            <Button ref="save" color="primary" disabled={saving} onClick={() => onSave(note)}>
              {saving ? 'Saving...' : 'Save'}
            </Button>
            <Button ref="cancel" disabled={saving} onClick={() => onCancel(note)}>Cancel</Button>
          </ButtonToolbar>
        </CardBlock>
      </Card>
    );
  }
}
export default EditableNote;
