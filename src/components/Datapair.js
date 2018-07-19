import PropTypes from 'prop-types';
import React from 'react';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';

const Datapair = (props) => {
  const { children, label, value, ...attributes } = props;
  return (
    <FormLabelGroup
      inline
      label={label}
      rowClassName="mb-1"
      {...attributes}
    >
      {children || <Input plaintext tag="div">{value}</Input>}
    </FormLabelGroup>
  );
};

Datapair.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node.isRequired,
  value: PropTypes.node,
};

export default Datapair;
