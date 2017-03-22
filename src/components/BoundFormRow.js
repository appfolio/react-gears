import React from 'react';
import FormRow from './FormRow';

const noop = () => {};

const withDefault = (value, defaultVal) => (
  typeof value === 'undefined' ? defaultVal : value
);

const BoundFormRow = (props, { value = {}, errors = {}, onChange }) => {
  const {
    onChange: onChangeProp,
    ...rowProps
  } = props;

  return (
    <FormRow
      value={withDefault(value[props.name], '')}
      feedback={errors[props.name] || ''}
      onChange={e => { onChangeProp(e); onChange(props.name)(e); }}
      {...rowProps}
    />
  );
};

BoundFormRow.contextTypes = {
  value: React.PropTypes.object,
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func
};

BoundFormRow.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func
};

BoundFormRow.defaultProps = {
  onChange: noop
};

export default BoundFormRow;
