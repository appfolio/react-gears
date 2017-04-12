import React, { Component, PropTypes } from 'react';
import {
  Row, Col, PatternInput, ValidatedFormGroup,
  CreditCardExpiration, CreditCardNumber,
} from '../';

export default class CreditCardInput extends Component {
  handleCardCVVChange = (event, { value, isValid }) => {
    this.props.onChange({ cardCVV: value, cardCVVIsValid: isValid });
  }
  handleCardExpirationChange = ({ month, year }) => {
    const TODAY = new Date();
    const expirationIsValid = new Date(year, month) >= TODAY;
    this.props.onChange({ expirationMonth: month, expirationYear: year, expirationIsValid });
  }
  handleCardNumberChange = (cardNumber, cardNumberIsValid) => {
    this.props.onChange({ cardNumber, cardNumberIsValid });
  }

  render() {
    const {
      cardNumber, cardCVV, errors,
      expirationMonth: month, expirationYear: year,
    } = this.props;

    return (
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
                  pattern={/^[0-9]{0,5}$/} onChange={this.handleCardCVVChange}
                />
              </ValidatedFormGroup>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <ValidatedFormGroup label="Card Expiration" error={errors.expiration}>
            <CreditCardExpiration
              month={month} monthName="expiration"
              year={year} yearName="expiration"
              onChange={this.handleCardExpirationChange}
            />
          </ValidatedFormGroup>
        </Col>
      </Row>
    );
  }
}

export const creditCardPropTypes = {
  cardNumber: PropTypes.string,
  cardCVV: PropTypes.string,
  errors: PropTypes.object,

  expirationMonth: (props, propName) => {
    const value = props[propName];
    if (value === null) return null;
    return typeof value === 'number' && value >= 1 && value <= 12
      ? null : new Error('Expiration Month must be a number between 1 and 12');
  },
  expirationYear: (props, propName) => {
    const value = props[propName];
    if (value === null) return null;

    const TODAY = new Date();
    return typeof value === 'number' && value >= TODAY.getFullYear()
      ? null : new Error('Expiration Year must be this year or later');
  },

  onChange: PropTypes.func,
};


CreditCardInput.propTypes = creditCardPropTypes;
CreditCardInput.defaultProps = {
  cardNumber: '',
  cardCVV: '',
  errors: {},
  expirationMonth: null,
  expirationYear: null,

  onChange: () => {},
};
