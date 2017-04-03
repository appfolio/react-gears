import React, { Component, PropTypes } from 'react';
import { Icon } from '../';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { number } from 'card-validator';
import cardTypeInfo from 'credit-card-type';

const TYPES = {
  'american-express': 'cc-amex',
  'diners-club': 'cc-diners-club',
  'master-card': 'cc-mastercard',
  discover: 'cc-discover',
  jcb: 'cc-jcb',
  visa: 'cc-visa'
};

function typeToIconName(type = '') {
  return TYPES[type.toLowerCase()] || null;
}
function includes(array, value) {
  return Array.isArray(array) && array.indexOf(value) !== -1;
}

export default class CreditCardNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', cardType: undefined };
  }

  componentDidMount() {
    this.handleChange(this.props.initialValue);
  }

  handleChange(proposedValue) {
    let value = proposedValue.replace(/[^0-9]/g, '');
    if (proposedValue === '') {
      return this.setState({ value, cardType: undefined });
    }

    const { card, isValid, isPotentiallyValid } = number(value);

    let cardType = undefined;
    if (card && card.type && includes(this.props.allowedBrands, card.type)) {
      cardType = typeToIconName(card.type);
    }

    const typeInfo = cardTypeInfo(value);
    if (typeInfo.length === 1) {
      const spaces = (typeInfo[0] || {}).gaps || [];
      value = spaces.slice().reverse()
        .filter(position => position < value.length)
        .reduce((cardNumber, position) =>
          `${cardNumber.slice(0, position)} ${cardNumber.slice(position)}`
        , value);
    }

    if (cardType && (isValid || isPotentiallyValid)) {
      return this.setState({ value, cardType });
    }

    return false;
  }

  render() {
    const { placeholder } = this.props;
    const { cardType } = this.state;

    return (
      <InputGroup className="credit-card-number-field">
        <Input
          placeholder={placeholder}
          value={this.state.value}
          onChange={(event) => { this.handleChange(event.target.value); }}
        />
        {cardType &&
          <InputGroupAddon>
            <Icon name={cardType} />
          </InputGroupAddon>
        }
      </InputGroup>
    );
  }
}

CreditCardNumber.defaultProps = {
  allowedBrands: Object.keys(TYPES),
  placeholder: 'Credit Card Number...',
  initialValue: '',
};
CreditCardNumber.propTypes = {
  allowedBrands: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
};
