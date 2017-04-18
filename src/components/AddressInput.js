import React from 'react';
import { Col, Row } from '../';
import { InputFormGroup, SelectFormGroup } from './FormGroups';
import noop from 'lodash.noop';

// TODO Dynamic states based on country:
import states from './address/USStates.js';
import COUNTRIES from './address/Countries.js';

const US_STATES = states.map(state => ({
  label: state.value,
  value: state.value
}));

function AddressInput(props) {
  return (
    <div>
      <InputFormGroup {...props} name="address1" />
      <InputFormGroup {...props} name="address2" />
      <Row className="no-gutters">
        <Col sm={6} xs={5}>
          <InputFormGroup
            {...props}
            name="city"
            formGroupProps={{ className: 'pr-3' }}
          />
        </Col>
        <Col sm={2} xs={3}>
          <SelectFormGroup
            {...props}
            className="w-100"
            name="state"
            options={US_STATES}
            formGroupProps={{ className: 'pr-3' }}
          />
        </Col>
        <Col sm={4} xs={4}>
          <InputFormGroup {...props} name="postal" placeholder="Zip" />
        </Col>
      </Row>
      <SelectFormGroup
        {...props}
        className="w-100"
        name="countryCode"
        options={COUNTRIES}
      />
    </div>
  );
}

export const addressPropType = {
  address1: React.PropTypes.string,
  address2: React.PropTypes.string,
  city: React.PropTypes.string,
  state: React.PropTypes.string,
  postal: React.PropTypes.string,
  countryCode: React.PropTypes.string
};

AddressInput.propTypes = {
  value: React.PropTypes.shape(addressPropType),
  defaultValue: React.PropTypes.shape(addressPropType),
  error: React.PropTypes.shape(addressPropType),
  onChange: React.PropTypes.func,
  disabled: React.PropTypes.bool
};

AddressInput.defaultProps = {
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false
};

export default AddressInput;
