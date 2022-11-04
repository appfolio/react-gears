import React, { ReactNode } from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import GearsForm from '../Form/Form';

interface FormProps<TFieldValues extends FieldValues> extends UseFormProps<TFieldValues> {
  onSubmit: SubmitHandler<TFieldValues>;
  children: ((useFormReturn: UseFormReturn<TFieldValues>) => ReactNode) | ReactNode;
}

const Form = <TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  ...useFormProps
}: FormProps<TFieldValues>) => {
  const useFormReturn = useForm<TFieldValues>(useFormProps);

  return (
    <FormProvider {...useFormReturn}>
      <GearsForm noValidate onSubmit={useFormReturn.handleSubmit(onSubmit)}>
        {typeof children === 'function' ? children(useFormReturn) : children}
      </GearsForm>
    </FormProvider>
  );
};

export default Form;
