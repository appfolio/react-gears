import { action } from '@storybook/addon-actions';
import React from 'react';
import CurrencyInput from './CurrencyInput';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
  parameters: {
    sourceLink: 'Input/CurrencyInput.tsx',
  },
};

export const Example = (args) => <CurrencyInput {...args} />;
Example.args = {
  onChange: action('onChange'),
  allowDecimal: true,
  allowNegative: true,
  includeThousandsSeparator: true,
  padZeros: true,
};

export const RightAligned = (args) => (
  <CurrencyInput inputProps={{ className: 'text-end' }} {...args} />
);
RightAligned.args = {
  onChange: action('onChange'),
};
