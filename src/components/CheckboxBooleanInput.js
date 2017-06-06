import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class CheckboxBooleanInput extends Component {
  static propTypes = {
    checkboxLabel: React.PropTypes.node,
    value: React.PropTypes.bool
  };

  render() {
    const { checkboxLabel, onChange, value } = this.props;

    return (
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            checked={value}
            onChange={e => onChange && onChange(e.target.checked)}
          />
          {checkboxLabel && <span className="ml-1" ref="label">{checkboxLabel}</span>}
        </Label>
      </FormGroup>
    );
  }
}

export default CheckboxBooleanInput;
