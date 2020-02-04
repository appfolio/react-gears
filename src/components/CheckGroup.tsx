import React from 'react';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';

type Value = string | number;
interface Option {
  label: string;
  value: Value;
}

interface CheckboxGroupProps {
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

interface RadioGroupProps {
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

type CheckGroupProps = CheckboxGroupProps | RadioGroupProps;

const CheckGroup = (props: CheckGroupProps) => {
  if (props.radio === true) return <RadioGroup {...props} />;

  return <CheckboxGroup {...props} />;
};

export default CheckGroup;
