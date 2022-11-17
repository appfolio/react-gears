import React from 'react';
import { bindProps } from '../../util/bindProps';
import { hasOwn } from '../../util/hasOwn';
import CheckboxInput from '../Checkbox/CheckboxInput';
import FileInput from '../Input/FileInput';
import Input from '../Input/Input';
import StaticInput from '../Input/StaticInput';
import RadioInput from '../Radio/RadioInput';
import FormLabelGroup from './FormLabelGroup';

const gearsInputs = {
  checkbox: CheckboxInput,
  file: FileInput,
  radio: RadioInput,
  static: StaticInput,
};

type PropOrDefault<T extends {}, K extends PropertyKey, D = never> = K extends keyof T ? T[K] : D;
type ReactStrapInputTypes = NonNullable<React.ComponentProps<typeof Input>['type']>;
export type InputTypes = ReactStrapInputTypes | keyof typeof gearsInputs;

function getInputByType<T extends InputTypes>(type: T) {
  return (
    hasOwn(gearsInputs, type)
      ? gearsInputs[type]
      : bindProps(Input, { type: type as ReactStrapInputTypes })
  ) as PropOrDefault<typeof gearsInputs, T, typeof Input>;
}

function parseFeedback(feedback: unknown) {
  return feedback && typeof feedback === 'object'
    ? ([undefined, { error: feedback }] as const)
    : ([feedback, {}] as const);
}

type TypeProp = InputTypes | React.ElementType;
type InputComp<T extends TypeProp> = T extends InputTypes
  ? PropOrDefault<typeof gearsInputs, T, typeof Input>
  : T;

type BaseFormRowProps = {
  className?: string;
  children?: React.ReactNode;
  feedback?: any;
  hint?: string;
  id?: string;
  inline?: boolean;
  label?: React.ReactNode;
  labelSize?: React.ComponentProps<typeof FormLabelGroup>['labelSize'];
  required?: boolean;
  rowClassName?: string;
  size?: string;
  stacked?: boolean;
  validFeedback?: React.ReactNode;
  width?: React.ComponentProps<typeof FormLabelGroup>['width'];
};

type FormRowProps<T extends TypeProp> = Omit<
  React.ComponentProps<InputComp<T>>,
  keyof BaseFormRowProps | 'type'
> &
  BaseFormRowProps & { type?: T };

function FormRow<T extends TypeProp>({
  children,
  feedback = '',
  hint = '',
  id,
  inline,
  label = '',
  labelSize,
  required,
  rowClassName = '',
  size,
  stacked,
  type = 'text' as T,
  validFeedback,
  width,
  ...props
}: FormRowProps<T>) {
  const InputComponent = React.useMemo(
    () => (typeof type === 'string' ? getInputByType(type as InputTypes) : type),
    [type]
  ) as any;
  const [baseFeedback, childFeedback] = parseFeedback(feedback);
  const inputCouldHaveChildren = type === 'checkbox' || type === 'radio' || type === 'select';
  const validProps = inputCouldHaveChildren ? { valid: !!validFeedback, invalid: !!feedback } : {};
  const memoChildren = React.useMemo(
    () =>
      inputCouldHaveChildren
        ? React.Children.map(
            children,
            (child) => React.isValidElement(child) && React.cloneElement(child, { type })
          )
        : undefined,
    [inputCouldHaveChildren, children, type]
  );

  return (
    <FormLabelGroup
      feedback={baseFeedback as React.ReactNode}
      hint={hint}
      inline={inline}
      inputId={id}
      label={label}
      labelSize={labelSize}
      required={required}
      rowClassName={rowClassName}
      size={size}
      stacked={stacked}
      validFeedback={validFeedback}
      width={width}
    >
      <InputComponent id={id} size={size} {...validProps} {...props} {...childFeedback}>
        {memoChildren}
      </InputComponent>
    </FormLabelGroup>
  );
}

export default FormRow;
