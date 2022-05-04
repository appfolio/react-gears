import classnames from 'classnames';
import type IMask from 'imask';
import React, { FC } from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';
import InputGroup from '../InputGroup/InputGroup';
import InputGroupText from '../InputGroup/InputGroupText';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'max' | 'min'>;

type Props = {
  allowDecimal?: boolean;
  allowNegative?: boolean;
  className?: string;
  id?: string;
  includeThousandsSeparator?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  inputProps?: InputProps;
  padZeros?: boolean;
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
const CurrencyInput: FC<Props> = ({
  allowDecimal = defaultProps.allowDecimal,
  allowNegative = defaultProps.allowNegative,
  className,
  includeThousandsSeparator = defaultProps.includeThousandsSeparator,
  inputProps,
  innerRef,
  padZeros = defaultProps.padZeros,
  size,
  value,
  onChange,
  ...props
}) => {
  const inputClassNames = classnames('form-control', inputProps && inputProps.className);
  const onAccept = (val: string, mask: IMask.InputMask<IMask.MaskedNumberOptions>) => {
    const input = (mask.el as IMask.HTMLMaskElement).input;
    input.setAttribute('value', val);
    if (onChange) {
      const ev = new Event('change');
      input.dispatchEvent(ev);
      onChange(ev as unknown as React.ChangeEvent<HTMLInputElement>);
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
  };

  /**
   * This allows persisting value between re-renders when using `CurrencyInput`
   * as uncontrolled component.
   * `react-imask` detects 'value' key in the props and sets the input value accordingly,
   * even if it's passed as `undefined`.
   * https://github.com/uNmAnNeR/imaskjs/blob/master/packages/react-imask/src/mixin.ts#L139-L147
   */
  if (value !== undefined) {
    maskedProps.value = value?.toString();
  }

  if (innerRef) {
    (maskedProps as any).inputRef = innerRef;
  }

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
