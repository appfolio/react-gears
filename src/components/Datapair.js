import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';

const Datapair = (props) => {
  const { children, className, label, value, ...attributes } = props;
  const classNames = classnames(
    'mb-1',
    className
  );
  return (
    <FormLabelGroup
      inline
      label={label}
      rowClassName={classNames}
      {...attributes}
    >
      {children || <Input plaintext tag="div">{value}</Input>}
    </FormLabelGroup>
  );
};

Datapair.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node.isRequired,
  value: PropTypes.node,
};

export default Datapair;
