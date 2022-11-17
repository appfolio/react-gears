import { BaseSyntheticEvent } from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

export type SubmitHandler<TFieldValues extends FieldValues> = (
  data: TFieldValues,
  useFormReturn: UseFormReturn<TFieldValues>,
  event?: BaseSyntheticEvent
) => any | Promise<any>;
