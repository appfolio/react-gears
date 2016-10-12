import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const FormChoice = props => {
  const {
    inline,
    children,
    ...attributes
  } = props;

  return inline ?
    <Label className="form-check-inline">
      <Input {...attributes} />
      <span children={children} />
    </Label> :
    <FormGroup check>
      <Label check>
        <Input {...attributes} />
        <span children={children} />
      </Label>
    </FormGroup>
}

export default FormChoice;
