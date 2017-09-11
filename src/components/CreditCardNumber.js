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
    icon: PropTypes.func, // TODO
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

  getType = (value) => {
    let type = undefined;

    if (!value || (value && value.trim().length === 0)) {
      return type;
    }

    const typeInfo = cardTypeInfo(value); // Get only first if more than 1 guess
    if (typeInfo.length === 1 && includes(this.props.types, typeInfo[0].type)) {
      type = typeInfo[0].type;
    }

    return type;
  }

  onChange = (e) => {
    const value = e.target.value;
    let type = this.getType(value);

    this.props.onChange(value, {}); // TODO
  }

  render() {
    const { className, value, ...inputProps } = this.props;
    delete inputProps.types;
    delete inputProps.onChange;

    let type = undefined;
    const typeInfo = cardTypeInfo(value); // Get only first if more than 1 guess
    if (typeInfo.length === 1 && includes(this.props.types, typeInfo[0].type)) {
      type = typeInfo[0].type;
    }

    return (
      <InputGroup className={className}>
        <Input
          value={value || ''}
          onChange={this.onChange}
          {...inputProps}
        />
        <InputGroupAddon className="p-0 px-2">
          <Icon
            name={this.props.icon(type)}
            fixedWidth
            size="lg"
          />
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
