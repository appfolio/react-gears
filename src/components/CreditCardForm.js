import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Button, Input, Row, Col } from 'reactstrap';
import {
  AddressInput, CreditCardNumber, CreditCardExpiration,
  FormFeedback, FormGroup, Icon,
} from '../';
import { fieldTypes as ADDRESS_PROPTYPES } from './AddressInput';

import STYLES from './CreditCardForm.scss';

const TRACKED_PROPS = [
  'firstName', 'lastName',
  'cardNumber', 'cardCVV', 'expirationMonth', 'expirationYear',
  'address1', 'address2', 'city', 'state', 'postal', 'countryCode',
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
const cardError = 'Card number is invalid';
const cvvError = ' ';
const expirationError = 'Card expiration must be in the future';
function validateForm(state) {
  return {
    firstName: state.firstName.match(nameRegex) ? undefined : nameError,
    lastName: state.lastName.match(nameRegex) ? undefined : nameError,
    address1: state.address1.match(addressRegex) ? undefined : addressError,
    address2: (state.address2 === '' || state.address2.match(addressRegex))
      ? undefined : addressError,
    cardNumber: state.cardNumberIsValid ? undefined : cardError,
    cardCVV: (state.cardCVV && state.cardCVV.length >= 3) ? undefined : cvvError,
    expiration: new Date(state.expirationYear || 0, state.expirationMonth || 0) >= new Date()
      ? undefined : expirationError,
  };
}

export default class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      ...extract(props, TRACKED_PROPS),
      errors: {},
    };
  }

  handleSave() {
    const errors = validateForm(this.state);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.onSave(extract(this.state, TRACKED_PROPS));
    }
  }
  handleCancel() {
    this.setState({ ...extract(this.props, TRACKED_PROPS), errors: {} });
    this.props.onCancel();
  }

  render() {
    const {
      firstName, lastName, cardNumber, cardCVV,
      expirationMonth: month, expirationYear: year,
      errors,
    } = this.state;
    const addressProps = extract(this.state,
      ['address1', 'address2', 'city', 'state', 'postal', 'countryCode']
    );

    return (
      <div className={`credit-card-form ${STYLES.creditCardForm}`}>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup color={errors.firstName && 'danger'}>
              <h6>First Name</h6>
              <Input
                name="firstName" placeholder="First Name" type="text" value={firstName}
                onChange={event => this.setState({ firstName: event.target.value })}
              />
              {errors.firstName && <FormFeedback children={errors.firstName} />}
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup color={errors.lastName && 'danger'}>
              <h6>Last Name</h6>
              <Input
                name="lastName" placeholder="Last Name" type="text" value={lastName}
                onChange={event => this.setState({ lastName: event.target.value })}
              />
              {errors.lastName && <FormFeedback children={errors.lastName} />}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h6>Card Number</h6>
            <Row>
              <Col xs={8}>
                <FormGroup color={errors.cardNumber && 'danger'}>
                  <CreditCardNumber
                    initialValue={cardNumber} placeholder="Card Number"
                    onChange={(updated, isValid) =>
                      this.setState({ cardNumber: updated, cardNumberIsValid: isValid })
                    }
                  />
                  {errors.cardNumber && <FormFeedback children={errors.cardNumber} />}
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup color={errors.cardCVV && 'danger'}>
                  <Input
                    name="cvv" placeholder="CVV" type="text" value={cardCVV}
                    onChange={event => this.setState({ cardCVV: event.target.value })}
                  />
                  {errors.cardCVV && <FormFeedback children={errors.cardCVV} />}
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup color={errors.expiration && 'danger'}>
              <h6>Card Expiration</h6>
              <CreditCardExpiration
                month={month} year={year}
                onChange={value => this.setState({
                  expirationMonth: value.month, expirationYear: value.year,
                })}
              />
              {errors.expiration && <FormFeedback children={errors.expiration} />}
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
        <Row>
          <Col xs={6}>
            <FormGroup className="pull-right">
              <Button color="success" onClick={this.handleSave}>
                <Icon name="save" /> Save
              </Button>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <Button color="danger" onClick={this.handleCancel}>
                <Icon name="ban" /> Cancel
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </div>
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

  onCancel: () => true,
  onSave: () => true,
};
CreditCardForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,

  cardNumber: PropTypes.string,
  cardCVV: PropTypes.string,
  expirationMonth: (props, propName) => {
    const value = props[propName];
    if (value === null) return null;
    return typeof value === 'number' && value >= 1 && value <= 12
      ? null : new Error('Expiration Month must be a number between 1 and 12');
  },
  expirationYear: (props, propName) => {
    const value = props[propName];
    if (value === null) return null;
    return typeof value === 'number' && value >= today.getFullYear()
      ? null : new Error('Expiration Year must be this year or later');
  },

  ...ADDRESS_PROPTYPES,
};
