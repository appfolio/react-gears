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

const CreditCardNumber: React.FunctionComponent<CreditCardNumberProps> = ({
  types= Object.keys(ICONS) as CardType[],
  onChange = () => {},
  className = '',
  ...props
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const type = getType(value);
    if (onChange) {
      onChange(value, type);
    }
  };

  const getType = (value?: string): CardBrand | undefined => {
    if (!value) {
      return undefined
    }

    const typeInfo = cardTypeInfo(value);
    // Return type if only one CC pattern matches and if allowed types includes type
    if (typeInfo.length === 1 && includes(types, typeInfo[0].type)) {
      return typeInfo[0].type;
    }

    return undefined;
  };

  /* eslint-disable  no-unused-vars */
  const { type, value, ...inputProps } = props;

  const ccType = getType(value);

  return (
    <InputGroup className={className}>
      <Input
        value={value || ''}
        onChange={onChangeHandler}
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
};

CreditCardNumber.propTypes = {
  // @ts-ignore
  ...Input.propTypes,
  className: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CreditCardNumber.defaultProps = {
  // @ts-ignore: Property 'defaultProps' does not exist on type 'typeof Input'.
  ...Input.defaultProps,
  className: '',
  types: Object.keys(ICONS),
  onChange: () => {},
};

export default CreditCardNumber;
