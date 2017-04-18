import React, { PropTypes } from 'react';
import { Col, Row } from '../';
import { InputFormGroup, SelectFormGroup } from './FormGroups';
import salutations from './name/salutations';
import noop from 'lodash.noop';

function NameInput(props) {
  return (
    <div>
      <Row noGutters>
        <Col xs={4}>
          <SelectFormGroup
            {...props}
            className="w-100"
            name="salutation"
            options={salutations}
            formGroupProps={{ className: 'pr-3' }}
          />
        </Col>

        <Col xs={4}>
          <InputFormGroup
            {...props}
            name="firstName"
            formGroupProps={{ className: 'pr-3' }}
          />
        </Col>

        <Col xs={4}><InputFormGroup {...props} name="lastName" /></Col>
      </Row>

      <InputFormGroup {...props} name="companyName" />
    </div>
  );
}

const fieldTypes = {
  salutation: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  companyName: PropTypes.string
};

NameInput.propTypes = {
  value: PropTypes.shape(fieldTypes),
  defaultValue: PropTypes.shape(fieldTypes),
  error: PropTypes.shape(fieldTypes),
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

NameInput.defaultProps = {
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false
};

export default NameInput;
