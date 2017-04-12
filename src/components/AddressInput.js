import React, { Component } from 'react';
import { FormGroup, Input, Row, Col, Select, FormFeedback } from '../';
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

class AddressInput extends Component {
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
        <FormGroup color={error.address1 && 'danger'}>
          <Input
            name="address1"
            type="text"
            placeholder="Address 1"
            {...this.propsFor('address1') }
            state={error.address1 && 'danger'}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
          {error.address1 && <FormFeedback children={error.address1} />}
        </FormGroup>
        <FormGroup color={error.address2 && 'danger'}>
          <Input
            name="address2"
            type="text"
            placeholder="Address 2"
            {...this.propsFor('address2') }
            state={error.address2 && 'danger'}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
          {error.address2 && <FormFeedback children={error.address2} />}
        </FormGroup>
        <Row className="no-gutters">
          <Col sm={6} xs={5}>
            <FormGroup className="pr-3" color={error.city && 'danger'}>
              <Input
                type="text"
                name="city"
                placeholder="City"
                {...this.propsFor('city') }
                state={error.city && 'danger'}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
              {error.city && <FormFeedback children={error.city} />}
            </FormGroup>
          </Col>
          <Col sm={2} xs={3}>
            <FormGroup className="pr-3" color={error.state && 'danger'}>
              <Select
                className="w-100"
                name="state"
                placeholder="State"
                options={US_STATES}
                {...this.propsFor('state') }
                onChange={selection => this.onChange({ state: selection && selection.value })}
                disabled={disabled}
              />
              {error.state && <FormFeedback children={error.state} />}
            </FormGroup>
          </Col>
          <Col sm={4} xs={4}>
            <FormGroup color={error.postal && 'danger'}>
              <Input
                type="text"
                name="postal"
                placeholder="Zip"
                {...this.propsFor('postal') }
                state={error.postal && 'danger'}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
              {error.postal && <FormFeedback children={error.postal} />}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup color={error.countryCode && 'danger'}>
          <Select
            className="w-100"
            name="countryCode"
            options={COUNTRIES}
            placeholder="Country"
            {...this.propsFor('countryCode') }
            onChange={selection => this.onChange({ countryCode: selection && selection.value })}
            disabled={disabled}
          />
          {error.countryCode && <FormFeedback children={error.countryCode} />}
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
  error: React.PropTypes.shape(fieldTypes),
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
