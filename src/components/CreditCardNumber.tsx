import React from 'react';
import PropTypes from 'prop-types';
import cardTypeInfo from 'credit-card-type';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';
import InputGroupText from './InputGroupText';

const ICONS = {
  'american-express': 'cc-amex',
  'diners-club': 'cc-diners-club',
  'master-card': 'cc-mastercard',
  discover: 'cc-discover',
  jcb: 'cc-jcb',
  visa: 'cc-visa'
};

function typeToIconName(type = '') {
  return ICONS[type.toLowerCase()] || 'credit-card';
}
function includes(array, value) {
  return Array.isArray(array) && array.indexOf(value) !== -1;
}

export default class CreditCardNumber extends React.Component {
  static propTypes = {
    ...Input.propTypes,
    className: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    ...Input.defaultProps,
    className: '',
    types: Object.keys(ICONS),
    onChange: () => {},
  };

  onChange = (e) => {
    const value = e.target.value;
    const type = this.getType(value);
    this.props.onChange(value, type);
  }

  getType = (value) => {
    const typeInfo = cardTypeInfo(value);
    // Return type if only one CC pattern matches and if allowed types includes type
    if (typeInfo.length === 1 && includes(this.props.types, typeInfo[0].type)) {
      return typeInfo[0].type;
    }

    return undefined;
  }

  render() {
    /* eslint-disable  no-unused-vars */
    const { className, onChange, type, types, value, ...inputProps } = this.props;

    const ccType = this.getType(value);

    return (
      <InputGroup className={className}>
        <Input
          value={value || ''}
          onChange={this.onChange}
          {...inputProps}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText className="p-0 px-2">
            <Icon
              name={typeToIconName(ccType)}
              fixedWidth
              size="lg"
            />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
