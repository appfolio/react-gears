import React, { Component, PropTypes } from 'react';
import { Button, Row, Col } from 'reactstrap';
import {
  AddressInput, CreditCardInput, PatternInput,
  FormGroup, Icon, ValidatedFormGroup,
} from '../';
import { addressPropType } from './AddressInput';
import { creditCardPropTypes } from './CreditCardInput';

import STYLES from './CreditCardForm.scss';

const TRACKED_PROPS = [
  'firstName', 'lastName',
  'cardNumber', 'cardCVV', 'expirationMonth', 'expirationYear',
  'address1', 'address2', 'city', 'state', 'postal', 'countryCode',
];

function extract(original, fields = []) {
  // eslint-disable-next-line arrow-body-style
  return fields.reduce((extracted, field) => ({
    ...extracted,
    [field]: original[field],
  }), {});
}

const ERRORS = {
  CARD_NUMBER: 'Card number is invalid',
  CARD_EXPIRATION: 'Card is expired',
  REQUIRED: 'Required',
};

function validateForm(form) {
  const errors = {};

  if (!form.firstName || !form.firstNameIsValid) errors.firstName = ERRORS.REQUIRED;
  if (!form.lastName || form.lastNameIsValid) errors.lastName = ERRORS.REQUIRED;

  if (!form.cardNumber || !form.cardNumberIsValid) errors.cardNumber = ERRORS.CARD_NUMBER;
  if (!form.cardCVV || !form.cardCVVIsValid) errors.cardCVV = ERRORS.REQUIRED;
  if (!form.expirationMonth || !form.expirationYear || !form.expirationIsValid) {
    errors.expiration = ERRORS.CARD_EXPIRATION;
  }

  if (!form.address1) errors.address1 = ERRORS.REQUIRED;
  if (!form.city) errors.city = ERRORS.REQUIRED;
  if (!form.state) errors.state = ERRORS.REQUIRED;
  if (!form.postal) errors.postal = ERRORS.REQUIRED;
  if (!form.countryCode) errors.countryCode = ERRORS.REQUIRED;

  return errors;
}

export default class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.resetState(props);
  }
  resetState = (props) => {
    return {
      ...extract(props, TRACKED_PROPS),
      hasFullyValidated: false,
      errors: {},
    };
  }

  handleSave = () => {
    const errors = validateForm(this.state);
    this.setState({ hasFullyValidated: true, errors });

    if (Object.keys(errors).length === 0) {
      this.props.onSave(extract(this.state, TRACKED_PROPS));
    }
  }
  handleCancel = () => {
    this.setState(this.resetState(this.props));
    this.props.onCancel();
  }

  handleAddressChange = (address) => {
    this.setState(address);
  }
  handleCardInfoChange = (cardInfo) => {
    this.setState(cardInfo);
  }
  handleBlur = (event) => {
    const fieldName = event.target.name;
    if (!fieldName) return;

    const error = validateForm(this.state)[fieldName];
    this.setState({
      errors: {
        ...this.state.errors,
        [fieldName]: error,
        [`${fieldName}IsValid`]: !error,
      },
    });
  }
  handlePatternInputChange = (event, { value, isValid }) => {
    this.setState({
      [event.target.name]: value,
      [`${event.target.name}IsValid`]: isValid,
    });
  }

  render() {
    const { firstName, lastName, errors } = this.state;
    const cardInfoProps = extract(this.state,
      ['cardNumber', 'cardCVV', 'expirationMonth', 'expirationYear']
    );
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
        <CreditCardInput
          {...cardInfoProps} errors={errors}
          onChange={this.handleCardInfoChange}
        />
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
              <Button
                color="success" onClick={this.handleSave}
                disabled={this.state.hasFullyValidated && Object.keys(errors).length > 0}
              >
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
  expirationMonth: null,
  expirationYear: null,

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

  ...addressPropType,
  ...creditCardPropTypes,

  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};
