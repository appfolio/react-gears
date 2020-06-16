import React from 'react';

interface CheckboxListInputProps {
  children?: React.ReactNode,
  onChange?: (value: string[]) => void,
  value?: string[],
}

const CheckboxListInput: React.FunctionComponent<CheckboxListInputProps> = ({
  children,
  ...props
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      const { checked, value } = e.target;
      const currentSelection = (props.value || []).slice(0);

      if (checked) {
        currentSelection.push(value);
      } else {
        const i = currentSelection.indexOf(value);
        i > -1 && currentSelection.splice(i, 1); // eslint-disable-line no-unused-expressions
      }

      props.onChange(currentSelection);
    }
  };

  return (
    <div>
      {React.Children.map(children as React.ReactElement | React.ReactElement[], choice => React.cloneElement(choice, {
        type: 'checkbox',
        selected: props.value,
        onChange: onChange,
        ...props
      }))}
    </div>
  );
};

export default CheckboxListInput;
