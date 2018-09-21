import PropTypes from 'prop-types';
import React from 'react';
import FormFeedback from './FormFeedback';
import FormGroup from './FormGroup';
import Label from './Label';

const ValidatedFormGroup = ({ children, error, label, labelTag: Tag, ...props }) => (
  <FormGroup color={error && 'danger'} {...props}>
    {label && <Tag>{label}</Tag>}
    {children}
    {error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);
export default ValidatedFormGroup;

ValidatedFormGroup.defaultProps = {
  children: [],
  error: null,
  labelTag: Label,
};
ValidatedFormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
  label: PropTypes.node,
  labelTag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
};
