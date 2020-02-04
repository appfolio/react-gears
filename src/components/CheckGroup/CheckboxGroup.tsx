import React from 'react';
import FormGroup from '../FormGroup';
import Label from '../Label';
import Input from '../Input';
import { Option, Value } from '../CheckGroup';

export interface CheckboxGroupProps {
  options: Option[];
  selected: Set<Value>;
  onChange: (values: Set<Value>) => void;
  radio?: false;
}

const CheckboxGroup = ({ options, selected, onChange }: CheckboxGroupProps) => {
  const handleCheckboxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const checked = ev.target.checked;
    const newSelected = new Set(selected);

    if (checked) {
      newSelected.add(ev.target.value);
    } else {
      newSelected.delete(ev.target.value);
    }

    onChange(newSelected);
  };

  return (
    <FormGroup>
      {
        options.map(option => (
          <FormGroup check key={option.value}>
            <Label check>
              <Input
                type="checkbox"
                value={option.value}
                checked={selected.has(option.value)}
                onChange={handleCheckboxChange}
              />{' '}{option.label}
            </Label>
          </FormGroup>
        ))
      }
    </FormGroup>
  );
};

export default CheckboxGroup;
