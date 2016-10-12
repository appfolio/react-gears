import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const FormChoice = props => {
  const {
    inline,
    color,
    state,
    disabled,
    children,
    type,
    ...attributes
  } = props;

  if (type === 'select') {
    return <option {...attributes} children={children} />
  } else if (inline) {
    return (
      <Label className="form-check-inline">
        <Input type={type} {...attributes} />
        <span children={children} />
      </Label>
    );
  } else {
    return (
      <FormGroup check color={color || state} disabled={disabled}>
        <Label check>
          <Input type={type} {...attributes} disabled={disabled} />
          <span children={children} />
        </Label>
      </FormGroup>
    );
  }
}

export default FormChoice;
