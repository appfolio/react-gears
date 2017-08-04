import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonToolbar, Card, CardBlock, Input } from '../';

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
        <CardBlock>
          <Input
            ref="text"
            type="textarea"
            value={note.text}
            rows="5"
            onChange={onChange}
          />
          <ButtonToolbar className="mt-3">
            <Button ref="save" color="primary" onClick={onSave}>Save</Button>
            <Button ref="cancel" onClick={onCancel}>Cancel</Button>
          </ButtonToolbar>
        </CardBlock>
      </Card>
    );
  }
}
export default EditableNote;
