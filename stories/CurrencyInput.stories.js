import React from 'react';
import { action } from '@storybook/addon-actions';
import { CurrencyInput } from '../src';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
};

export const DefaultProps = () => (
  <CurrencyInput onChange={action('onChange')} />
);

export const AllowNegative = () => (
  <CurrencyInput allowNegative onChange={action('onChange')} />
);

export const DisallowDecimals = () => (
  <CurrencyInput allowDecimal={false} onChange={action('onChange')} />
);

export const DisallowCommas = () => (
  <CurrencyInput includeThousandsSeparator={false} onChange={action('onChange')} />
);

export const RightAligned = () => (
  <CurrencyInput
    inputProps={{ className: 'text-right' }}
    onChange={action('onChange')}
  />
);
