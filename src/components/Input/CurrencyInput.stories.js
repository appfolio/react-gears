import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import CurrencyInput from './CurrencyInput';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
};

export const Example = () => (
  <CurrencyInput
    onChange={action('onChange')}
    allowDecimal={boolean('allowDecimal', true)}
    allowNegative={boolean('allowNegative', true)}
    includeThousandsSeparator={boolean('includeThousandsSeparator', true)}
    padZeros={boolean('padZeros', true)}
  />
);

export const RightAligned = () => (
  <CurrencyInput inputProps={{ className: 'text-end' }} onChange={action('onChange')} />
);
