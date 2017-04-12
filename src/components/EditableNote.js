import React from 'react';
import { Button, ButtonToolbar, Card, CardBlock, Input } from '../';

const EditableNote = ({ note, onCancel, onChange, onSave }) => (
  <Card>
    <CardBlock>
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
    </CardBlock>
  </Card>
);

EditableNote.propTypes = {
  note: React.PropTypes.object.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
};

export default EditableNote;
