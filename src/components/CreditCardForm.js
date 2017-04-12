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
  'cardHolderName',
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

export const ERRORS = {
  CARD_NUMBER: 'Card number is invalid',
  CARD_EXPIRATION: 'Expiration is invalid',
  REQUIRED: 'Required',
};

function validateForm(form) {
  const errors = {};

  if (!form.cardHolderName || form.cardHolderNameIsValid === false) {
    errors.cardHolderName = ERRORS.REQUIRED;
  }

  if (!form.cardNumber || form.cardNumberIsValid === false) errors.cardNumber = ERRORS.CARD_NUMBER;
  if (!form.cardCVV || form.cardCVVIsValid === false) errors.cardCVV = ERRORS.REQUIRED;
  const expirationIsValid = new Date(form.expirationYear, form.expirationMonth + 1) >= new Date();
  if (!form.expirationMonth || !form.expirationYear || !expirationIsValid) {
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

    if (Object.keys(errors).length === 0) {
      this.props.onSave(extract(this.state, TRACKED_PROPS));
    }

    this.setState({ hasFullyValidated: true, errors });
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
      },
      [`${fieldName}IsValid`]: !error,
    });
  }
  handlePatternInputChange = (event, { value, isValid }) => {
    this.setState({
      [event.target.name]: value,
      [`${event.target.name}IsValid`]: isValid,
    });
  }

  render() {
    const { cardHolderName, errors } = this.state;
    const cardInfoProps = extract(this.state,
      ['cardNumber', 'cardCVV', 'expirationMonth', 'expirationYear']
    );
    const addressProps = extract(this.state,
      ['address1', 'address2', 'city', 'state', 'postal', 'countryCode']
    );

    return (
      <div className={`credit-card-form ${STYLES.creditCardForm}`} onBlur={this.handleBlur}>
        <Row>
          <Col xs={12}>
            <ValidatedFormGroup label="Cardholder Name" error={errors.cardHolderName}>
              <PatternInput
                name="cardHolderName" placeholder="Name on Card" type="text"
                value={cardHolderName} restrictInput={false}
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
              <Button name="saveButton" color="success" onClick={this.handleSave}>
                <Icon name="save" /> Save
              </Button>
            </FormGroup>
          </Col>
          <Col xs={6}>
            <FormGroup>
              <Button name="cancelButton" color="danger" onClick={this.handleCancel}>
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
  cardHolderName: '',

  cardNumber: '',
  cardCVV: '',
  expirationMonth: null,
  expirationYear: null,

  address1: '',
  address2: '',
  city: '',
  state: '',
  postal: '',
  countryCode: '',

  onCancel: () => {},
  onSave: () => {},
};
CreditCardForm.propTypes = {
  cardHolderName: PropTypes.string,

  ...addressPropType,
  ...creditCardPropTypes,

  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};
