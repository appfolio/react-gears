import PropTypes from 'prop-types';
import React from 'react';
import { Col, Input, Row, Select, ValidatedFormGroup } from '../';
import flow from 'lodash.flow';
import noop from 'lodash.noop';

// TODO Dynamic states based on country:
import states from './address/USStates.js';
import COUNTRIES from './address/Countries.js';

const US_STATES = states.map(state => ({
  label: state.value,
  value: state.value
}));

const readEvent = e => ({ [e.target.name]: e.target.value });

class AddressInput extends React.Component {
  onChange = update => {
    this.props.onChange({ ...this.props.value, ...update });
  }

  propsFor = field => {
    if (this.props.value[field]) {
      return { value: this.props.value[field] };
    }
    return { defaultValue: this.props.defaultValue[field] };
  }

  render() {
    const { disabled, error } = this.props;

    return (
      <div>
        <ValidatedFormGroup error={error.address1}>
          <Input
            name="address1"
            type="text"
            placeholder="Address 1"
            {...this.propsFor('address1')}
            state={error.address1 && 'danger'}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
        </ValidatedFormGroup>
        <ValidatedFormGroup error={error.address2}>
          <Input
            name="address2"
            type="text"
            placeholder="Address 2"
            {...this.propsFor('address2')}
            state={error.address2 && 'danger'}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
        </ValidatedFormGroup>
        <Row className="no-gutters">
          <Col sm={6} xs={5}>
            <ValidatedFormGroup className="pr-3" error={error.city}>
              <Input
                type="text"
                name="city"
                placeholder="City"
                {...this.propsFor('city')}
                state={error.city && 'danger'}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
            </ValidatedFormGroup>
          </Col>
          <Col sm={2} xs={3}>
            <ValidatedFormGroup className="pr-3" error={error.state}>
              <Select
                className="w-100"
                name="state"
                placeholder="State"
                options={US_STATES}
                {...this.propsFor('state')}
                onChange={selection => this.onChange({ state: selection && selection.value })}
                disabled={disabled}
              />
            </ValidatedFormGroup>
          </Col>
          <Col sm={4} xs={4}>
            <ValidatedFormGroup error={error.postal}>
              <Input
                type="text"
                name="postal"
                placeholder="Zip"
                {...this.propsFor('postal')}
                state={error.postal && 'danger'}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
            </ValidatedFormGroup>
          </Col>
        </Row>
        <ValidatedFormGroup error={error.countryCode} className="mb-0">
          <Select
            className="w-100"
            name="countryCode"
            options={COUNTRIES}
            placeholder="Country"
            {...this.propsFor('countryCode')}
            onChange={selection => this.onChange({ countryCode: selection && selection.value })}
            disabled={disabled}
          />
        </ValidatedFormGroup>
      </div>
    );
  }
}

export const addressPropType = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
  countryCode: PropTypes.string,
};

AddressInput.propTypes = {
  value: PropTypes.shape(addressPropType),
  defaultValue: PropTypes.shape(addressPropType),
  error: PropTypes.shape(addressPropType),
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

AddressInput.defaultProps = {
  value: {},
  defaultValue: {},
  error: {},
  onChange: noop,
  disabled: false
};

export default AddressInput;
