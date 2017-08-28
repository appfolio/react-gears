import PropTypes from 'prop-types';
import React from 'react';
import FormFeedback from './FormFeedback';
import FormGroup from './FormGroup';

const ValidatedFormGroup = ({ children, error, label, labelTag: Tag, ...props }) => (
  <FormGroup color={error && 'danger'} {...props}>
    {label && <Tag>{label}</Tag>}
    {children}
    {error && <FormFeedback children={error} />}
  </FormGroup>
);
export default ValidatedFormGroup;

ValidatedFormGroup.defaultProps = {
  children: [],
  error: null,
  label: '',
  labelTag: 'h6',
};
ValidatedFormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
  label: PropTypes.string,
  labelTag: PropTypes.string,
};
