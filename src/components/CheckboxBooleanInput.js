import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

class CheckboxBooleanInput extends React.Component {
  static propTypes = {
    checkboxLabel: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.bool
  };

  render() {
    const { checkboxLabel, onChange, value, id, ...inputProps } = this.props;

    return (
      <FormGroup check className="col-form-label d-flex align-items-center h-100">
        <Input
          id={id}
          {...inputProps}
          type="checkbox"
          checked={value}
          onChange={e => onChange && onChange(e.target.checked)}
          className="my-0"
        />
        {checkboxLabel && (
          <Label check for={id} className="my-0">
            {checkboxLabel}
          </Label>
        )}
      </FormGroup>
    );
  }
}

export default CheckboxBooleanInput;
