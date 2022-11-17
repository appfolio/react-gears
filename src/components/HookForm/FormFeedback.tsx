import React, {
  ComponentProps,
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from 'react';
import { useFormState } from 'react-hook-form';
import GearsFormFeedback from '../Form/FormFeedback';
import Input, { InputProps } from './Input';

export type InputChildProps = {
  id?: string;
  name: string;
};

type BaseFormFeedbackProps = {
  name?: string;
};

type FormFeedbackProps = Omit<
  ComponentProps<typeof GearsFormFeedback>,
  keyof BaseFormFeedbackProps
> &
  BaseFormFeedbackProps;

const isValidChildWithNameProp = (child: ReactNode): child is ReactElement<InputChildProps> =>
  isValidElement(child) && typeof child.props.name === 'string';

export const findChildWithNameProp = (children: ReactNode) => {
  return Children.toArray(children).find(isValidChildWithNameProp);
};

const FormFeedback = ({ name, children, ...gearsFormFeedbackProps }: FormFeedbackProps) => {
  const { errors } = useFormState();

  if (name) {
    const error = errors[name];
    return (
      <>
        {error && (
          <GearsFormFeedback className="d-block" {...gearsFormFeedbackProps}>
            {error.message}
          </GearsFormFeedback>
        )}
      </>
    );
  }

  const childWithNameProp = findChildWithNameProp(children);
  if (!childWithNameProp) {
    return <GearsFormFeedback {...gearsFormFeedbackProps}>{children}</GearsFormFeedback>;
  }

  const error = errors[childWithNameProp.props.name];

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === Input) {
          return cloneElement(child as ReactElement<InputProps>, { invalid: !!error });
        }
        return child;
      })}
      {error && <GearsFormFeedback {...gearsFormFeedbackProps}>{error.message}</GearsFormFeedback>}
    </>
  );
};

export default FormFeedback;
