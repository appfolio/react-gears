import React, { Component } from 'react';
import { FormGroup, Input, Row, Col, Select } from '../';
import flow from 'lodash/flow';
import noop from 'lodash/noop';
import pick from 'lodash/pick';

// TODO Dynamic states based on country:
import states from './address/USStates.js';
import COUNTRIES from './address/Countries.js';

const US_STATES = states.map(state => {
  return {
    label: state.value,
    value: state.value
  }
});

class Address extends Component {
  componentWillMount() {
    this.props.onChange(pick(this.props, ['address1', 'address2', 'city', 'state', 'postal', 'country']));
  }

  readEvent = e => ({ [e.target.name]: e.target.value })

  onChange = update => {
    this.props.onChange(Object.assign({}, this.props.value, update));
  }

  render() {
    const { address1, address2, city, state, postal, country } = this.props;

    return (
      <div>
        <FormGroup>
          <Input
            name="address1"
            type="text"
            placeholder="Address 1"
            value={address1}
            onChange={flow([this.readEvent, this.onChange])}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="address2"
            type="text"
            placeholder="Address 2"
            value={address2}
            onChange={flow([this.readEvent, this.onChange])}
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm={6} xs={5} className="pr-0">
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={flow([this.readEvent, this.onChange])}
              />
            </Col>
            <Col sm={2} xs={3}>
              <Select
                className="w-100"
                name="state"
                options={US_STATES}
                value={state}
                onChange={selection => selection ? this.onChange({ state: selection.value }) : null}
              />
            </Col>
            <Col sm={4} xs={4} className="pl-0">
              <Input
                type="text"
                name="postal"
                placeholder="Zip"
                value={postal}
                onChange={flow([this.readEvent, this.onChange])}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Select
            className="w-100"
            name="country"
            options={COUNTRIES}
            value={country}
            onChange={selection => selection ? this.onChange({ country: selection.value }) : null}
          />
        </FormGroup>
      </div>
    )
  }
}

Address.propTypes = {
  address1: React.PropTypes.string,
  address2: React.PropTypes.string,
  city: React.PropTypes.string,
  state: React.PropTypes.string,
  postal: React.PropTypes.string,
  country: React.PropTypes.string,
  onChange: React.PropTypes.func
};

Address.defaultProps = {
  address1: '',
  address2: '',
  city: '',
  state: '',
  postal: '',
  country: 'US',
  onChange: noop
};

const AddressWrapper = ({ value, ...props }) => (<Address {...props} {...value} value={value} />);

export default AddressWrapper;
