import React, { Component, PropTypes } from 'react';
import { Button, Row, Col } from 'reactstrap';
import {
  AddressInput, CreditCardNumber, CreditCardExpiration,
  FormGroup, Icon, PatternInput, ValidatedFormGroup,
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

const TODAY = new Date();

const ADDRESS = /^[\s\w-]{5,}$/;
const ERRORS = {
  ADDRESS: 'Please enter a valid address',
  NAME: 'Please enter a valid name',
  CARD_NUMBER: 'Card number is invalid',
  CARD_CVV: ' ',
  CARD_EXPIRATION: 'Card is expired'
};

function validateForm(form) {
  return {
    firstName: form.firstNameIsValid ? undefined : ERRORS.NAME,
    lastName: form.lastNameIsValid ? undefined : ERRORS.NAME,

    cardNumber: form.cardNumberIsValid ? undefined : ERRORS.CARD_NUMBER,
    cardCVV: form.cardCVVIsValid ? undefined : ERRORS.CARD_CVV,
    expiration: form.expirationIsValid ? undefined : ERRORS.CARD_EXPIRATION,

    address1: form.address1.match(ADDRESS) ? undefined : ERRORS.ADDRESS,
    address2: (!form.address2 || form.address2.match(ADDRESS)) ? undefined : ERRORS.ADDRESS,
    city: form.city.match(ADDRESS) ? undefined : ' ',
    state: form.state !== '' ? undefined : ' ',
    postal: form.postal.match(/^[0-9 _]{5,}$/) ? undefined : ' '
  };
}

export default class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...extract(props, TRACKED_PROPS),
      errors: {},
    };
  }

  handleSave = () => {
    const errors = validateForm(this.state);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.onSave(extract(this.state, TRACKED_PROPS));
    }
  }
  handleCancel = () => {
    this.setState({ ...extract(this.props, TRACKED_PROPS), errors: {} });
    this.props.onCancel();
  }

  handleAddressChange = (address) => {
    this.setState(address);
  }
  handleBlur = (event) => {
    const fieldName = event.target.name;
    const error = validateForm(this.state)[fieldName];
    this.setState({
      errors: { ...this.state.errors, [fieldName]: error },
    });
  }
  handleCardExpirationChange = ({ month, year }) => {
    const expirationIsValid = new Date(year, month) >= TODAY;
    this.setState({ expirationMonth: month, expirationYear: year, expirationIsValid });
  }
  handleCardNumberChange = (cardNumber, cardNumberIsValid) => {
    this.setState({ cardNumber, cardNumberIsValid });
  }
  handlePatternInputChange = (event, { value, isValid }) => {
    this.setState({
      [event.target.name]: value,
      [`${event.target.name}IsValid`]: isValid,
    });
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
      <div className={`credit-card-form ${STYLES.creditCardForm}`} onBlur={this.handleBlur}>
        <Row>
          <Col xs={12} sm={6}>
            <ValidatedFormGroup label="First Name" error={errors.firstName}>
              <PatternInput
                name="firstName" placeholder="First Name" type="text" value={firstName}
                restrictInput={false} pattern={/^[\w\s]{1,}$/g}
                onChange={this.handlePatternInputChange}
              />
            </ValidatedFormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <ValidatedFormGroup label="Last Name" error={errors.lastName}>
              <PatternInput
                name="lastName" placeholder="Last Name" type="text" value={lastName}
                restrictInput={false} pattern={/^[\w\s]{1,}$/g}
                onChange={this.handlePatternInputChange}
              />
            </ValidatedFormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={8}>
                <ValidatedFormGroup label="Card Number" error={errors.cardNumber}>
                  <CreditCardNumber
                    initialValue={cardNumber} placeholder="Card Number"
                    onChange={this.handleCardNumberChange}
                  />
                </ValidatedFormGroup>
              </Col>
              <Col xs={4}>
                <ValidatedFormGroup label="CVV" error={errors.cardCVV}>
                  <PatternInput
                    name="cardCVV" placeholder="CVV" type="text" value={cardCVV}
                    restrictInput={false} pattern={/^[0-9]{3,5}$/}
                    onChange={this.handlePatternInputChange}
                  />
                </ValidatedFormGroup>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <ValidatedFormGroup label="Card Expiration" error={errors.expiration}>
              <CreditCardExpiration
                month={month} year={year} onChange={this.handleCardExpirationChange}
              />
            </ValidatedFormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ValidatedFormGroup label="Billing Address">
              <AddressInput
                sm={12} defaultValue={addressProps} error={errors}
                onChange={this.handleAddressChange}
              />
            </ValidatedFormGroup>
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

CreditCardForm.defaultProps = {
  firstName: '',
  lastName: '',

  cardNumber: '',
  cardCVV: '',
  expirationMonth: TODAY.getMonth(),
  expirationYear: TODAY.getFullYear(),

  address1: '',
  address2: '',
  city: '',
  state: '',
  postal: '',
  countryCode: 'US',

  onCancel: () => {},
  onSave: () => {},
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
    return typeof value === 'number' && value >= TODAY.getFullYear()
      ? null : new Error('Expiration Year must be this year or later');
  },

  ...ADDRESS_PROPTYPES,
};
