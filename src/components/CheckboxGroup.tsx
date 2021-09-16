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

export interface CheckboxGroupProps {
  options: Option[];
  selected: Value[];
  onChange: (values: Value[]) => void;
}

const CheckboxGroup = ({ options, selected, onChange }: CheckboxGroupProps) => {
  const [groupId] = useState(uuidv4());

  const handleCheckboxChange = (checked: boolean, value: Value) => {
    const newSelected = new Set(selected);

    if (checked) {
      newSelected.add(value);
    } else {
      newSelected.delete(value);
    }

    onChange(Array.from(newSelected));
  };

  return (
    <FormGroup>
      {
        options.map((option) => {
          const id = `option-${option.label}-${groupId}`;
          return (
            <FormGroup check key={option.value} className="col-form-label d-flex align-items-center">
              <Input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={ev => handleCheckboxChange(ev.target.checked, option.value)}
                className="my-0"
                id={id}
              />
              <Label check className="my-0" for={id}>
                {' '}{option.label}
              </Label>
            </FormGroup>
        );
})
      }
    </FormGroup>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
