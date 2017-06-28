import React, { Component, PropTypes } from 'react';
import { Icon, InputGroup } from '../';
import { Input, InputGroupAddon } from 'reactstrap';
import CardValidator from 'card-validator';
import cardTypeInfo from 'credit-card-type';

const { number } = CardValidator;

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
    this.setValue(this.props.value);
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setValue(props.value);
    }
  }

  onInputChange = (event) => {
    this.setValue(event.target.value);
  }

  setValue = (proposedValue) => {
    let value = proposedValue.replace(/[^0-9]/g, '');
    if (proposedValue === '') {
      this.props.onChange(value, false, undefined);
      this.setState({ value, cardType: undefined });
      return;
    }

    const { card, isValid, isPotentiallyValid } = number(value);

    let cardTypeIconName = undefined;
    let cardTypeIsAllowed = false;

    if (card && card.type) {
      cardTypeIconName = typeToIconName(card.type);
      cardTypeIsAllowed = includes(this.props.allowedBrands, card.type);
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
    if (!this.props.restrictInput || cardTypeIsAllowed && (isValid || isPotentiallyValid)) {
      this.props.onChange({ cardNumber: value, cardType: card.type }, isValid);
      this.setState({ value, cardTypeIconName, isValid });
    }
  }

  render() {
    const { placeholder } = this.props;
    const { cardTypeIconName, value } = this.state;

    return (
      <InputGroup className="credit-card-number-field">
        <Input
          name="cardNumber"
          placeholder={placeholder} value={value}
          onChange={this.onInputChange}
        />
        {cardTypeIconName &&
          <InputGroupAddon>
            <Icon name={cardTypeIconName} size="lg" />
          </InputGroupAddon>
        }
      </InputGroup>
    );
  }
}

CreditCardNumber.defaultProps = {
  allowedBrands: Object.keys(TYPES),
  placeholder: 'Credit Card Number',
  restrictInput: false,
  value: '',

  onChange: (cardNumber, isValid, cardType) => true, // eslint-disable-line no-unused-vars
};
CreditCardNumber.propTypes = {
  allowedBrands: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  restrictInput: PropTypes.bool,
  value: PropTypes.string,

  onChange: PropTypes.func,
};
