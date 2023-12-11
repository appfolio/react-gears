import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormGroup from '../Form/FormGroup';
import Input from '../Input/Input';
import Label from '../Label/Label';

type Value = any;
interface Option {
  label: string;
  value: Value;
  disabled?: boolean;
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
      {options.map((option, index) => {
        const id = `option-${option.label}-${groupId}`;
        const dataTestId = `react-gears-checkboxgroup-${groupId}-${index}`;
        return (
          <FormGroup check key={option.value}>
            <Input
              data-testid={dataTestId}
              type="checkbox"
              checked={selected.includes(option.value)}
              onChange={(ev) => handleCheckboxChange(ev.target.checked, option.value)}
              disabled={option.disabled}
              id={id}
            />
            <Label check for={id}>
              {' '}
              {option.label}
            </Label>
          </FormGroup>
        );
      })}
    </FormGroup>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
