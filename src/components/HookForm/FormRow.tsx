import React, { ComponentProps, useCallback } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import GearsFormRow, { InputTypes } from '../Form/FormRow';

type BaseFormRowProps = {
  // showInvalidFeedback?: boolean;
  // showValidFeedback?: boolean;
};

type ExcludedGearsFormRowProps = 'feedback' | 'validFeedback';

type FormRowProps<TInputType extends InputTypes> = Omit<
  ComponentProps<typeof GearsFormRow<TInputType>>,
  keyof BaseFormRowProps | ExcludedGearsFormRowProps
> &
  Omit<UseControllerProps, 'control'> &
  BaseFormRowProps;

const FormRow = <TInputType extends InputTypes>({
  defaultValue,
  name,
  onChange: formRowOnChange,
  rules,
  ...gearsFormRowProps
}: FormRowProps<TInputType>) => {
  const {
    field: { onChange, onBlur },
    fieldState: { error },
  } = useController({ name, defaultValue, rules });

  const handleChange = useCallback(
    (e: any) => {
      console.log(e);
      onChange(e);
      formRowOnChange?.(e);
    },
    [onChange, formRowOnChange]
  );

  return (
    <GearsFormRow
      {...gearsFormRowProps}
      invalid={error ? true : undefined}
      feedback={error?.message}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
};

export default FormRow;
