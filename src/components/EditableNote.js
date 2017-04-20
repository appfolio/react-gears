import React from 'react';
import { Button, ButtonToolbar, Card, CardBlock, Input } from '../';

class EditableNote extends React.Component {
  static propTypes = {
    note: React.PropTypes.object.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired
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
