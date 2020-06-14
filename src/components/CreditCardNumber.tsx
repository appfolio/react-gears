import React from 'react';
import PropTypes from 'prop-types';
import cardTypeInfo, { CardBrand } from 'credit-card-type';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';
import InputGroupText from './InputGroupText';

const ICONS: {
  [key: string]: IconName | undefined
} = {
  'american-express': 'cc-amex',
  'diners-club': 'cc-diners-club',
  'master-card': 'cc-mastercard',
  discover: 'cc-discover',
  jcb: 'cc-jcb',
  visa: 'cc-visa'
};

type CardType = 'visa' | 'master-card' | 'american-express' |'discover' | 'diners-club' | 'jcb';

type IconName = 'cc-amex' | 'cc-diners-club' | 'cc-mastercard' | 'cc-discover'
  | 'cc-jcb' | 'cc-visa' | 'credit-card';

function typeToIconName(type = ''): IconName {
  return ICONS[type.toLowerCase()] || 'credit-card';
}

function includes(array: CardType[] | undefined, value?: CardBrand) {
  return Array.isArray(array) && !!value && array.indexOf(value as CardType) !== -1;
}

interface CreditCardNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  types?: CardType[];
  value?: string;
  onChange?: (value: string, type?: CardBrand) => void;
}

export default class CreditCardNumber extends React.Component<CreditCardNumberProps, {}> {
  static propTypes = {
    // @ts-ignore
    ...Input.propTypes,
    className: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    // @ts-ignore
    ...Input.defaultProps,
    className: '',
    types: Object.keys(ICONS),
    onChange: () => {},
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const type = this.getType(value);
    if (this.props.onChange) {
      this.props.onChange(value, type);
    }
  };

  getType = (value?: string): CardBrand | undefined => {
    if (!value) {
      return undefined
    }

    const typeInfo = cardTypeInfo(value);
    // Return type if only one CC pattern matches and if allowed types includes type
    if (typeInfo.length === 1 && includes(this.props.types, typeInfo[0].type)) {
      return typeInfo[0].type;
    }

    return undefined;
  };

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
