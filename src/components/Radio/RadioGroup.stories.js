import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

const fruitOptions = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

const veggieOptions = [
  { label: 'Kale', value: 'kale' },
  { label: 'Spinach', value: 'spinach' },
  { label: 'Broccoli', value: 'broccoli' },
  { label: 'Asparagus', value: 'asparagus' },
  { label: 'Cabbage', value: 'cabbage' },
];

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    sourceLink: 'Radio/RadioGroup.tsx',
  },
};

export const LiveExample = () => {
  const [fruit, setFruit] = useState('');
  const [veggie, setVeggie] = useState('');

  const handleFruitChange = (value) => {
    setFruit(value);
    action('onChange (fruit)')(value);
  };
  const handleVeggieChange = (value) => {
    setVeggie(value);
    action('onChange (veggie)')(value);
  };

  return (
    <div>
      <RadioGroup
        options={fruitOptions}
        onChange={handleFruitChange}
        selected={fruit}
        name="fruit"
      />
      <hr />
      <RadioGroup
        options={veggieOptions}
        onChange={handleVeggieChange}
        selected={veggie}
        name="veggie"
      />
    </div>
  );
};
