import React from 'react';
import FormGroup from '../Form/FormGroup';
import Input from '../Input/Input';
import Label from '../Label/Label';

interface Option {
  label: JSX.Element | string;
  value: any;
}

export interface RadioGroupProps {
  options: Option[];
  onChange: (value: any) => void;
  selected?: any;
  name?: string;
}

const RadioGroup = ({ options, onChange, selected, name }: RadioGroupProps) => (
  <FormGroup>
    {options.map((option) => (
      <FormGroup check key={option.value}>
        <Label check>
          <Input
            data-testid="react-gears-radiogroup-formgroup-input"
            type="radio"
            checked={selected === option.value}
            onChange={(e) => e.target.checked && onChange(option.value)}
            name={name}
          />{' '}
          {option.label}
        </Label>
      </FormGroup>
    ))}
  </FormGroup>
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
