import React, {
  ComponentProps,
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from 'react';
import { useFormState } from 'react-hook-form';
import GearsFormLabelGroup from '../Form/FormLabelGroup';
import { findChildWithNameProp } from './FormFeedback';
import Input, { InputProps } from './Input';

type FormLabelGroupProps = ComponentProps<
  typeof GearsFormLabelGroup
>;

const FormLabelGroup = ({
  children,
  ...gearsFormLabelGroupProps
}: FormLabelGroupProps) => {
  const { errors } = useFormState();
  const childWithNameProp = findChildWithNameProp(children);

  if (!childWithNameProp) {
    return (
      <GearsFormLabelGroup {...gearsFormLabelGroupProps}>
        {children}
      </GearsFormLabelGroup>
    );
  }

  const { name, id } = childWithNameProp.props;
  const inputError = errors[name];

  return (
    <GearsFormLabelGroup
      feedback={inputError?.message}
      inputId={id}
      {...gearsFormLabelGroupProps}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === Input) {
          return cloneElement(
            child as ReactElement<InputProps>,
            { invalid: !!inputError }
          );
        }
        return child;
      })}
    </GearsFormLabelGroup>
  );
};

export default FormLabelGroup;
