import React, { Component } from 'react';
import { FormGroup, Input, Row, Col, Select } from '../';
import flow from 'lodash/flow';
import noop from 'lodash/noop';

// TODO Dynamic states based on country:
import states from './address/USStates.js';
import COUNTRIES from './address/Countries.js';

const US_STATES = states.map(state => ({
  label: state.value,
  value: state.value
}));

const readEvent = e => ({ [e.target.name]: e.target.value });

class AddressInput extends Component {
  onChange = update => {
    this.props.onChange(Object.assign({}, this.props.value, update));
  }

  propsFor = field => {
    if (this.props.value[field]) {
      return { value: this.props.value[field] };
    } else {
      return { defaultValue: this.props.defaultValue[field] };
    }
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Input
            name="address1"
            type="text"
            placeholder="Address 1"
            {...this.propsFor('address1')}
            onChange={flow([readEvent, this.onChange])}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="address2"
            type="text"
            placeholder="Address 2"
            {...this.propsFor('address2')}
            onChange={flow([readEvent, this.onChange])}
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm={6} xs={5} className="pr-0">
              <Input
                type="text"
                name="city"
                placeholder="City"
                {...this.propsFor('city')}
                onChange={flow([readEvent, this.onChange])}
              />
            </Col>
            <Col sm={2} xs={3}>
              <Select
                className="w-100"
                name="state"
                placeholder="State"
                options={US_STATES}
                {...this.propsFor('state')}
                onChange={selection => this.onChange({ state: selection && selection.value })}
              />
            </Col>
            <Col sm={4} xs={4} className="pl-0">
              <Input
                type="text"
                name="postal"
                placeholder="Zip"
                {...this.propsFor('postal')}
                onChange={flow([readEvent, this.onChange])}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Select
            className="w-100"
            name="countryCode"
            options={COUNTRIES}
            placeholder="Country"
            {...this.propsFor('countryCode')}
            onChange={selection => this.onChange({ countryCode: selection && selection.value })}
          />
        </FormGroup>
      </div>
    );
  }
}

const fieldTypes = {
  address1: React.PropTypes.string,
  address2: React.PropTypes.string,
  city: React.PropTypes.string,
  state: React.PropTypes.string,
  postal: React.PropTypes.string,
  countryCode: React.PropTypes.string
};

AddressInput.propTypes = {
  value: React.PropTypes.shape(fieldTypes),
  defaultValue: React.PropTypes.shape(fieldTypes),
  onChange: React.PropTypes.func
};

AddressInput.defaultProps = {
  value: {},
  defaultValue: {},
  onChange: noop
};

export default AddressInput;
