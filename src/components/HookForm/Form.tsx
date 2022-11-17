import React, { ReactNode, ComponentProps } from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler as HookFormSubmitHandler,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import GearsForm from '../Form/Form';
import { SubmitHandler } from './types';

type BaseFormProps<TFieldValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFieldValues>;
  children: ((useFormReturn: UseFormReturn<TFieldValues>) => ReactNode) | ReactNode;
};

type FormProps<TFieldValues extends FieldValues> = Omit<
  ComponentProps<typeof GearsForm>,
  keyof BaseFormProps<TFieldValues>
> &
  UseFormProps<TFieldValues> &
  BaseFormProps<TFieldValues>;

const Form = <TFieldValues extends FieldValues = FieldValues, TContext = any>({
  children,
  action,
  method,
  onSubmit = () => undefined,
  mode,
  reValidateMode,
  defaultValues,
  resolver,
  context,
  criteriaMode,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  delayError,
  ...gearsFormProps
}: FormProps<TFieldValues>) => {
  const useFormReturn = useForm<TFieldValues, TContext>({
    mode,
    reValidateMode,
    defaultValues,
    resolver,
    context,
    criteriaMode,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    delayError,
  });

  const handleFormSubmit: HookFormSubmitHandler<TFieldValues> = async (formData, event) => {
    return await onSubmit(formData, { ...useFormReturn }, event);
  };

  return (
    <FormProvider {...useFormReturn}>
      <GearsForm
        noValidate
        onSubmit={useFormReturn.handleSubmit(handleFormSubmit)}
        {...gearsFormProps}
      >
        {typeof children === 'function' ? children(useFormReturn) : children}
      </GearsForm>
    </FormProvider>
  );
};

export default Form;
