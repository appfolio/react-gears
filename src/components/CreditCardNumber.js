import PropTypes from 'prop-types';
import React from 'react';
import CardValidator from 'card-validator';
import cardTypeInfo from 'credit-card-type';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';

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
  return TYPES[type.toLowerCase()] || 'credit-card';
}
function includes(array, value) {
  return Array.isArray(array) && array.indexOf(value) !== -1;
}

export default class CreditCardNumber extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.func,
    types: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    icon: typeToIconName,
    types: Object.keys(TYPES),
    onChange: () => {},
  };

  state = {
    type: null
  };

  onChange = (e) => {
    const value = e.target.value;
    let type = undefined;

    if (!value || (value && value.trim().length === 0)) {
      this.props.onChange(value, false, type);
      this.setState({ type });
      return;
    }

    const { card, isValid, isPotentiallyValid } = number(value);
    if (isValid && card) {
      type = card.type;
    } else if (isPotentiallyValid) {
      const typeInfo = cardTypeInfo(value)[0]; // Get only first if more than 1 guess
      if (typeInfo) {
        type = typeInfo.type;
      }
    }

    // Filter out disallowed card types
    type = includes(this.props.types, type) ? type : undefined;
    // TODO should isValid be false here?

    this.props.onChange(value, isValid, type);
    this.setState({ type });
  }

  render() {
    const { type } = this.state;
    const { className, value, ...inputProps } = this.props;
    delete inputProps.types;
    delete inputProps.onChange;

    return (
      <InputGroup className={className}>
        <Input
          value={value || ''}
          onChange={this.onChange}
          {...inputProps}
        />
        <InputGroupAddon className="p-0 px-2">
          <Icon
            name={type ? this.props.icon(type) : 'credit-card'}
            fixedWidth
            size="lg"
          />
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
