import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const CheckboxBooleanInput = props => (
  <FormGroup check>
    <Label check>
      <Input
        type="checkbox"
        checked={props.value}
        onChange={e => props.onChange && props.onChange(e.target.checked)}
        />
    </Label>
  </FormGroup>
);

CheckboxBooleanInput.propTypes = {
  value: React.PropTypes.bool
}

export default CheckboxBooleanInput;
