import flow from 'lodash/flow';
import noop from 'lodash/noop';
import startCase from 'lodash/startCase';
import React, { PropTypes } from 'react';
import { Input, ValidatedFormGroup } from '../../';
import { createOnChange, createPropsFor, readEvent } from './utilities';

export default function InputFormGroup(props) {
  const { name, error, formGroupProps } = props;
  const err = error[name];
  const onChange = flow(readEvent, createOnChange(props));
  const propsFor = createPropsFor(props);

  return (
    <ValidatedFormGroup {...formGroupProps} error={err}>
      <Input
        placeholder={startCase(name)}
        {...props}
        {...propsFor(name)}
        state={err && 'danger'}
        onChange={onChange}
      />
    </ValidatedFormGroup>
  );
}

InputFormGroup.propTypes = {
  type: PropTypes.string,
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  formGroupProps: PropTypes.shape({
    className: PropTypes.string
  })
};

InputFormGroup.defaultProps = {
  type: 'text',
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false,
  formGroupProps: {}
};
