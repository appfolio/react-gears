import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Input, Row, Col } from 'reactstrap';
import {
  AddressInput, CreditCardNumber, CreditCardExpiration,
  Form, FormFeedback, FormGroup,
} from '../';

import STYLES from './CreditCardForm.scss';

const TRACKED_PROPS = [
  'firstName', 'lastName',
  'cardNumber', 'expirationMonth', 'expirationYear',
  'address1', 'address2',
  'city', 'state', 'postal', 'countryCode',
];

function extract(original, fields = []) {
  return fields.reduce((extracted, field) => ({
    ...extracted,
    [field]: original[field],
  }), {});
}

const nameRegex = /^[\s\w/\\'-]{3,}$/gi;
const nameError = 'Please enter a valid name';
const addressRegex = /^[\s\w/\\-]{5,}$/gi;
const addressError = 'Please enter a valid address';
function validateForm(state) {
  return {
    firstName: state.firstName.match(nameRegex) ? undefined : nameError,
    lastName: state.lastName.match(nameRegex) ? undefined : nameError,
    address1: state.address1.match(addressRegex) ? undefined : addressError,
    address2: (state.address2 === '' || state.address2.match(addressRegex))
      ? undefined : addressError,

  };
}

export default class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = extract(props, TRACKED_PROPS);
  }
  componentWillReceiveProps(props) {
    this.setState(extract(props, TRACKED_PROPS));
  }

  render() {
    const errors = validateForm(this.state);

    const {
      firstName, lastName, cardNumber, cardCVV,
      expirationMonth: month, expirationYear: year
    } = this.state;
    const addressProps = extract(this.state,
      ['address1', 'address2', 'city', 'state', 'postal', 'countryCode']
    );

    return (
      <Form className={`credit-card-form ${STYLES.creditCardForm}`} sm={12}>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup color={errors.firstName && 'danger'}>
              <h6>First Name</h6>
              <Input
                name="First Name" placeholder="First Name" type="text" value={firstName}
                onChange={event => this.setState({ firstName: event.target.value })}
              />
              {errors.firstName && <FormFeedback children={nameError} />}
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup color={errors.lastName && 'danger'}>
              <h6>Last Name</h6>
              <Input
                name="Last Name" placeholder="Last Name" type="text" value={lastName}
                onChange={event => this.setState({ lastName: event.target.value })}
              />
              {errors.lastName && <FormFeedback children={nameError} />}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h6>Card Number</h6>
            <Row>
              <Col xs={8}>
                <CreditCardNumber
                  error={errors.cardNumber}
                  initialValue={cardNumber} placeholder="Card Number"
                  onChange={updated => this.setState({ cardNumber: updated })}
                />
              </Col>
              <Col xs={4}>
                <FormGroup color={errors.cardCVV && 'danger'}>
                  <Input
                    name="CVV" placeholder="CVV" type="text" value={cardCVV}
                    onChange={event => this.setState({ cardCVV: event.target.value })}
                  />
                  {errors.cardCVV && <FormFeedback children={cvvError} />}
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <h6>Card Expiration</h6>
              <CreditCardExpiration
                month={month} year={year}
                onChange={value => this.setState({
                  expirationMonth: value.month, expirationYear: value.year,
                })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup>
              <h6>Billing Address</h6>
              <AddressInput sm={12} defaultValue={addressProps} />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

const today = new Date();

CreditCardForm.defaultProps = {
  firstName: '',
  lastName: '',

  cardNumber: '',
  cardCVV: '',
  expirationMonth: today.getMonth(),
  expirationYear: today.getFullYear(),

  address1: '',
  address2: '',
  city: '',
  state: '',
  postal: '',
  countryCode: 'US',
};
CreditCardForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  countryCode: PropTypes.string,

  expirationMonth: (props, propName) => {
    const value = props[propName];
    return typeof value === 'number' && value >= 1 && value <= 12;
  },
  expirationYear: (props, propName) => (
    typeof props[propName] === 'number' && props[propName] >= (new Date()).getFullYear()
  ),
};
