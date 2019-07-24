import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';

/**
 * Datapairs are for displaying labeled data. Each element is comprised
 * of two parts: the key (label) and a value. The key is an identifier for some form of data and
 * the value can be text or links.
 */
const Datapair = (props) => {
  const { children, className, label, value, ...attributes } = props;
  const classNames = classnames(
    'mb-1',
    'js-datapair',
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
