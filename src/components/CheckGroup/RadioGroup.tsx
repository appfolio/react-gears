import React from 'react';
import FormGroup from '../FormGroup';
import Label from '../Label';
import Input from '../Input';
import { Option, Value } from '../CheckGroup';

export interface RadioGroupProps {
  options: Option[];
  selected?: Value;
  onChange: (value?: Value) => void;
  radio: true;
}

const RadioGroup = ({ options, selected, onChange }: RadioGroupProps) => {
  const handleCheckboxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.checked) onChange(ev.target.value);
  };

  return (
    <FormGroup>
      {
        options.map(option => (
          <FormGroup check key={option.value}>
            <Label check>
              <Input
                type="radio"
                value={option.value}
                checked={selected === option.value}
                onChange={handleCheckboxChange}
              />{' '}{option.label}
            </Label>
          </FormGroup>
        ))
      }
    </FormGroup>
  );
};

export default RadioGroup;
