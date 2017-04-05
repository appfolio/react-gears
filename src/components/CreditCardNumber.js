import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';
import { Icon, InputGroup } from '../';
import { Input, InputGroupAddon } from 'reactstrap';
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
    autoBind(this);

    this.state = { value: '', cardType: undefined };
  }

  componentDidMount() {
    this.setValue(this.props.initialValue);
  }

  onInputChange(event) {
    this.setValue(event.target.value);
  }

  setValue(proposedValue) {
    let value = proposedValue.replace(/[^0-9]/g, '');
    if (proposedValue === '') {
      this.props.onChange(value, false);
      this.setState({ value, cardType: undefined });
      return;
    }

    const { card, isValid, isPotentiallyValid } = number(value);

    let cardType = undefined;
    if (card && card.type && includes(this.props.allowedBrands, card.type)) {
      cardType = typeToIconName(card.type);
    }

    const typeInfo = cardTypeInfo(value);
    if (typeInfo.length === 1) {
      const spaces = (typeInfo[0] || {}).gaps || [];
      value = spaces // For VISA: [4, 8, 12]
        // Reverse-order, since each space added changes line length
        .reverse()
        // Remove any space-positions that occur after the current length
        .filter(position => position < value.length)
        // Inject spaces into the value at each declared position
        .reduce((cardNumber, position) =>
          `${cardNumber.slice(0, position)} ${cardNumber.slice(position)}`
        , value);
    }

    // Only accept the change if we recognize the card type, and it is/may be valid
    if (cardType && (isValid || isPotentiallyValid)) {
      this.props.onChange(value, isValid);
      this.setState({ value, cardType, isValid });
    }
  }

  render() {
    const { placeholder } = this.props;
    const { cardType, value } = this.state;

    return (
      <InputGroup className="credit-card-number-field">
        <Input
          name="cardNumber"
          placeholder={placeholder} value={value}
          onChange={this.onInputChange}
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
  initialValue: '',
  placeholder: 'Credit Card Number...',

  onChange: (cardNumber, isValid) => true, // eslint-disable-line no-unused-vars
};
CreditCardNumber.propTypes = {
  allowedBrands: PropTypes.arrayOf(PropTypes.string),
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,

  onChange: PropTypes.func,
};
