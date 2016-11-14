import React, { Component } from 'react';
import Select from './Select.js';
import { FormGroup, Input, Row, Col } from 'reactstrap';
import { autorun, reaction, observable } from 'mobx';
import { observer } from 'mobx-react';

// TODO Dynamic states based on country:
import states from './address/USStates.js';
import COUNTRIES from './address/Countries.js';

const US_STATES = states.map(state => {
  return {
    label: state.value,
    value: state.value
  }
});

// TODO field validation

@observer
class Address extends Component {

  @observable address = {
    address1: this.props.address1,
    address2: this.props.address2,
    city: this.props.city,
    state: this.props.state,
    postal: this.props.postal,
    country: this.props.country
  }

  // Calls onChange handler (if any) whenever internal state changes:
  changeHandler = autorun(() => {
    this.props.onChange({
      address1: this.address.address1,
      address2: this.address.address2,
      city: this.address.city,
      state: this.address.state,
      postal: this.address.postal,
      country: this.address.country
    });
  });

  render() {
    const props = this.props;
    return (
  <div>
    <FormGroup>
      <Input
        type="text"
        placeholder="Address 1"
        value={this.address.address1}
        onChange={e => this.address.address1 = e.target.value}
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="text"
        placeholder="Address 2"
        value={this.address.address2}
        onChange={e => this.address.address2 = e.target.value}
      />
    </FormGroup>
    <FormGroup>
      <Row>
        <Col sm={6} xs={5} className="pr-0">
          <Input
            type="text"
            placeholder="City"
            value={this.address.city}
            onChange={e => this.address.city = e.target.value}
          />
        </Col>
        <Col sm={2} xs={3}>
          <Select
            className="w-100"
            options={US_STATES}
            value={this.address.state}
            onChange={selection => this.address.state = selection ? selection.value : null}
          />
        </Col>
        <Col sm={4} xs={4} className="pl-0">
          <Input
            type="text"
            placeholder="Zip"
            value={this.address.postal}
            onChange={e => this.address.postal = e.target.value}
          />
        </Col>
      </Row>
    </FormGroup>
    <FormGroup>
      <Select
        className="w-100"
        options={COUNTRIES}
        value={this.address.country}
        onChange={selection => this.address.country = selection ? selection.value : null}
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
  country: 'US',
  onChange: () => {}
};

export default Address;
