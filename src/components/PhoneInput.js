import React, { PropTypes } from 'react';
import { Col, Row } from '../';
import { InputFormGroup, SelectFormGroup } from './FormGroups';
import labels from './phone/labels';
import noop from 'lodash.noop';

function PhoneInput(props) {
  return (
    <Row noGutters>
      <Col xs={4}>
        <SelectFormGroup
          {...props}
          className="w-100"
          name="label"
          options={labels}
          formGroupProps={{ className: 'pr-3' }}
        />
      </Col>
      <Col xs={8}>
        <InputFormGroup {...props} name="number" />
      </Col>
    </Row>
  );
}

const fieldTypes = {
  label: PropTypes.string,
  number: PropTypes.string
};

PhoneInput.propTypes = {
  value: PropTypes.shape(fieldTypes),
  defaultValue: PropTypes.shape(fieldTypes),
  error: PropTypes.shape(fieldTypes),
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

PhoneInput.defaultProps = {
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false
};

export default PhoneInput;
