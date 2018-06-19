import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ButtonToolbar from './ButtonToolbar';
import Card from './Card';
import CardBody from './CardBody';
import Input from './Input';

class EditableNote extends React.Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  render() {
    const { note, onCancel, onChange, onSave } = this.props;

    return (
      <Card>
        <CardBody>
          <Input
            type="textarea"
            value={note.text}
            rows="5"
            onChange={onChange}
          />
          <ButtonToolbar className="mt-3">
            <Button ref="save" color="primary" onClick={onSave}>Save</Button>
            <Button ref="cancel" onClick={onCancel}>Cancel</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    );
  }
}
export default EditableNote;
