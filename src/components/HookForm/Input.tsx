import React, { ComponentProps } from 'react';
import { useFormContext, RegisterOptions, Validate, ValidationRule } from 'react-hook-form';
import GearsInput from '../Input/Input';

type ValueAsNumber = boolean | undefined;
type ValueAsDate = boolean | undefined;

type DetermineValidateValue<
  TValueAsNumber extends ValueAsNumber,
  TValueAsDate extends ValueAsDate
> = TValueAsNumber extends true ? number : TValueAsDate extends true ? Date : string;

export type InputProps<
  TValueAsNumber extends ValueAsNumber = undefined,
  TValueAsDate extends ValueAsDate = undefined
> = Omit<ComponentProps<typeof GearsInput>, keyof RegisterOptions> &
  Omit<RegisterOptions, 'validate' | 'valueAsNumber' | 'valueAsDate'> & {
    name: string;
    validate?:
      | Validate<DetermineValidateValue<TValueAsNumber, TValueAsDate>>
      | Record<string, Validate<DetermineValidateValue<TValueAsNumber, TValueAsDate>>>;
    valueAsNumber?: TValueAsNumber;
    valueAsDate?: TValueAsDate;
  };

const extractValue = <TValidationValue extends boolean | number | string>(
  objOrValue?: ValidationRule<TValidationValue>
) => (typeof objOrValue === 'object' ? objOrValue.value : objOrValue);

const Input = <
  TValueAsNumber extends ValueAsNumber = undefined,
  TValueAsDate extends ValueAsDate = undefined
>({
  name,
  valueAsNumber,
  valueAsDate,
  validate,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  required,
  ...restProps
}: InputProps<TValueAsNumber, TValueAsDate>) => {
  const { register } = useFormContext();
  const { ref, ...restRegister } = register(name, {
    valueAsNumber,
    valueAsDate,
    validate,
    max,
    min,
    pattern,
    required,
  });
  const gearsInputProps = {
    ...restProps,
    max: extractValue(max),
    maxLength: extractValue(maxLength),
    min: extractValue(min),
    minLength: extractValue(minLength),
    required: !!required,
  };

  return <GearsInput {...restRegister} innerRef={ref} {...gearsInputProps} />;
};

export default Input;
