import React from 'react';
import FormRow from './FormRow';

const BoundFormRow = (props, { value = {}, errors = {}, onChange }) => (
  <FormRow
    value={value[props.name]}
    feedback={errors[props.name]}
    onChange={onChange(props.name)}
    {...props}
  />
);

BoundFormRow.contextTypes = {
  value: React.PropTypes.object,
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func
};

BoundFormRow.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default BoundFormRow;
