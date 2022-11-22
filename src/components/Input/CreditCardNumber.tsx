import cardTypeInfo, { CardBrand } from 'credit-card-type';
import React, { FC } from 'react';
import { InputProps } from 'reactstrap';
import Icon from '../Icon/Icon';
import InputGroup from '../InputGroup/InputGroup';
import InputGroupText from '../InputGroup/InputGroupText';
import Input from './Input';

// runtime representation of card types for input validation
type CardType = 'visa' | 'master-card' | 'american-express' | 'discover' | 'diners-club' | 'jcb';

type IconName =
  | 'cc-amex'
  | 'cc-diners-club'
  | 'cc-mastercard'
  | 'cc-discover'
  | 'cc-jcb'
  | 'cc-visa'
  | 'credit-card';

interface CreditCardNumberProps extends Omit<Omit<InputProps, 'onChange'>, 'types'> {
  className?: string;
  types?: CardType[];
  value?: string;
  onChange?: (value: string, type?: CardBrand) => void;
}

const ICONS: {
  [key: string]: IconName | undefined;
} = {
  'american-express': 'cc-amex',
  'diners-club': 'cc-diners-club',
  'master-card': 'cc-mastercard',
  discover: 'cc-discover',
  jcb: 'cc-jcb',
  visa: 'cc-visa',
};

function typeToIconName(type = ''): IconName {
  return ICONS[type.toLowerCase()] || 'credit-card';
}

function removeTypes(props: InputProps): Omit<InputProps, 'types'> {
  delete props.types;
  return props;
}

function isAllowedCardType(x: string | undefined, allowedTypes: CardType[]): x is CardType {
  // ok to cast here because we are inside the type card that validates the cast
  return allowedTypes.includes(x as CardType);
}

const defaultProps = {
  ...removeTypes(Input.defaultProps),
  className: '',
  types: Object.keys(ICONS) as CardType[],
  onChange: () => {},
};

const CreditCardNumber: FC<CreditCardNumberProps> = ({
  types = defaultProps.types,
  onChange = defaultProps.onChange,
  className = defaultProps.className,
  ...props
}) => {
  const getType = (value?: string): CardBrand | undefined => {
    if (!value) {
      return undefined;
    }

    const typeInfo = cardTypeInfo(value);
    // Return type if only one CC pattern matches and if allowed types includes type
    if (typeInfo.length === 1 && isAllowedCardType(typeInfo[0].type, types)) {
      return typeInfo[0].type;
    }

    return undefined;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const type = getType(value);
    if (onChange) {
      onChange(value, type);
    }
  };

  /* eslint-disable-next-line  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
  const { type, value, ...inputProps } = props;

  const ccType = getType(value);

  return (
    <InputGroup className={className}>
      <Input value={value || ''} onChange={onChangeHandler} {...inputProps} />
      <InputGroupText className="p-0 px-2">
        <Icon iconStyle='regular' name={typeToIconName(ccType)} fixedWidth size="lg" />
      </InputGroupText>
    </InputGroup>
  );
};

CreditCardNumber.defaultProps = defaultProps;
CreditCardNumber.displayName = 'CreditCardNumber';

export default CreditCardNumber;
