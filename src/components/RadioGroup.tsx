import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';

type Value = any;
interface Option {
  label: string;
  value: Value;
}

export interface RadioGroupProps {
  options: Option[];
  selected?: Value;
  onChange: (value?: Value) => void;
}

const RadioGroup = ({ options, selected, onChange }: RadioGroupProps) => {
  const [groupId] = useState(uuidv4());

  const handleRadioChange = (checked: boolean, value: Value) => {
    if (checked) onChange(value);
  };

  return (
    <FormGroup>
      {
        options.map((option) => {
          const id = `option-${option.label}-${groupId}`;
          return (
            <FormGroup check key={option.value}>
              <Input
                type="radio"
                checked={selected === option.value}
                onChange={ev => handleRadioChange(ev.target.checked, option.value)}
                id={id}
              />
              <Label check for={id}>
                {' '}{option.label}
              </Label>
            </FormGroup>
        );
})
      }
    </FormGroup>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
