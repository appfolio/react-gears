import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ButtonToolbar from './ButtonToolbar';
import Card from './Card';
import CardBlock from './CardBlock';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';

const noteShape = {
  errors: PropTypes.string,
  text: PropTypes.string
};

class EditableNote extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    note: PropTypes.shape(noteShape).isRequired,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  render() {
    const { className, note, onCancel, onChange, onSave } = this.props;
    const { errors, text } = note;

    return (
      <Card className={className}>
        <CardBlock>
          <FormLabelGroup feedback={errors} stacked>
            <Input
              ref="text"
              rows="4"
              state={errors && 'danger'}
              type="textarea"
              value={text}
              onChange={event => onChange(event, note)}
            />
          </FormLabelGroup>
          <ButtonToolbar className="mt-3">
            <Button ref="save" color="primary" onClick={() => onSave(note)}>Save</Button>
            <Button ref="cancel" onClick={() => onCancel(note)}>Cancel</Button>
          </ButtonToolbar>
        </CardBlock>
      </Card>
    );
  }
}
export default EditableNote;
