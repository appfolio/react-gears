import {
  ReactNode,
  ComponentType,
  PropsWithChildren,
  ComponentProps,
  ReactElement,
} from 'react';
import { InputType } from 'reactstrap/lib/Input';
import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import Input from './Input';
import StaticInput from './StaticInput';
import FileInput from './FileInput';

type StringToComponentMap = {
  checkbox: typeof CheckboxInput;
  radio: typeof RadioInput;
  static: typeof StaticInput;
  file: typeof FileInput;
  input: typeof Input;
};

type NestedComponent = ComponentType | keyof StringToComponentMap | InputType;

type Lookup<
  TComponent extends NestedComponent
> = TComponent extends keyof StringToComponentMap
  ? StringToComponentMap[TComponent]
  : TComponent extends InputType
  ? StringToComponentMap['input']
  : TComponent;

type BaseFormRowProps<TComponent extends NestedComponent> = {
  label?: ReactNode;
  labelSize?: string;
  hint?: string;
  feedback?: any;
  id?: string;
  required?: boolean;
  rowClassName?: string;
  type?: TComponent;
  inline?: boolean;
  stacked?: boolean;
  size?: string;
  validFeedback?: ReactNode;
  width?: {
    size?: boolean | number | string;
    push?: string | number;
    pull?: string | number;
    offset?: string | number;
  };
};

type FormRowProps<TComponent extends NestedComponent> = Omit<
  ComponentProps<Lookup<TComponent>>,
  keyof BaseFormRowProps<TComponent>
> &
  BaseFormRowProps<TComponent>;

declare const FormRow: <TComponent extends NestedComponent = 'input'>(
  props: PropsWithChildren<FormRowProps<TComponent>>
) => ReactElement | null;

export default FormRow;
