import React from 'react';
import FormGroup from '../Form/FormGroup';
import Input from '../Input/Input';
import Label from '../Label/Label';

type Value = any;
interface Option {
  label: JSX.Element | string;
  value: Value;
}

export interface RadioGroupProps {
  options: Option[];
  selected?: Value;
  onChange: (value?: Value) => void;
}

const RadioGroup = ({ options, selected, onChange }: RadioGroupProps) => {
  const handleRadioChange = (checked: boolean, value: Value) => {
    if (checked) {
      onChange(value);
    }
  };

  return (
    <FormGroup>
      {options.map((option) => (
        <FormGroup check key={option.value}>
          <Label check>
            <Input
              type="radio"
              checked={selected === option.value}
              onChange={(ev) => handleRadioChange(ev.target.checked, option.value)}
            />{' '}
            {option.label}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
