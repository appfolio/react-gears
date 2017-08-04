import PropTypes from 'prop-types';
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
  value: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
};

BoundFormRow.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

BoundFormRow.defaultProps = {
  onChange: noop
};

export default BoundFormRow;
