import noop from 'lodash/noop';
import startCase from 'lodash/startCase';
import React, { PropTypes } from 'react';
import { Select, ValidatedFormGroup } from '../../';
import { createOnChange, createPropsFor } from './utilities';

export default function SelectFormGroup(props) {
  const { name, error, formGroupProps } = props;
  const err = error[name];
  const onChange = createOnChange(props);
  const propsFor = createPropsFor(props);

  return (
    <ValidatedFormGroup {...formGroupProps} error={err}>
      <Select
        placeholder={startCase(name)}
        {...props}
        {...propsFor(name)}
        onChange={selection =>
          onChange({ [name]: selection && selection.value })}
      />
    </ValidatedFormGroup>
  );
}

SelectFormGroup.propTypes = {
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

SelectFormGroup.defaultProps = {
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false,
  formGroupProps: {}
};
