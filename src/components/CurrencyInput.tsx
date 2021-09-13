import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { IMaskInput, IMaskInputProps } from 'react-imask';
import IMask from 'imask';
import InputGroup from './InputGroup';
import InputGroupText from './InputGroupText';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, | 'max' | 'min' >;

type Props = {
  allowDecimal?: boolean;
  allowNegative?: boolean;
  className?: string;
  id?: string;
  includeThousandsSeparator?: boolean;
  inputProps?: InputProps;
  padZeros?: boolean,
  size?: string;
  value?: string | number;
} & InputProps;

const defaultProps = {
  allowDecimal: true,
  allowNegative: false,
  includeThousandsSeparator: true,
  padZeros: true,
};

// TODO support I18n
const CurrencyInput: FunctionComponent<Props> = ({
  allowDecimal = defaultProps.allowDecimal,
  allowNegative = defaultProps.allowNegative,
  className,
  includeThousandsSeparator = defaultProps.includeThousandsSeparator,
  inputProps,
  padZeros = defaultProps.padZeros,
  size,
  value,
  onChange,
  ...props
}: Props) => {
  const inputClassNames = classnames('form-control', inputProps && inputProps.className);
  const onAccept = (val: string, mask: IMask.InputMask<IMask.MaskedNumberOptions>) => {
    if (onChange) {
      const ev = new Event('change') as unknown as React.ChangeEvent<HTMLInputElement>;
      // @ts-ignore
      mask.el.input.dispatchEvent(ev);
      onChange(ev);
    }
  };

  const maskedProps: IMaskInputProps<IMask.MaskedNumberOptions> = {
    ...inputProps,
    ...props,
    className: inputClassNames,
    mask: Number,
    onAccept,
    padFractionalZeros: allowDecimal && padZeros,
    radix: '.',
    scale: allowDecimal ? 2 : 0,
    signed: allowNegative,
    thousandsSeparator: includeThousandsSeparator ? ',' : '',
    value: value?.toString(),
  };

  return (
    <InputGroup size={size} className={className}>
      <InputGroupText>$</InputGroupText>
      <IMaskInput {...maskedProps} />
    </InputGroup>
  );
};

CurrencyInput.displayName = 'CurrencyInput';
CurrencyInput.defaultProps = defaultProps;

export default CurrencyInput;
