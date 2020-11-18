import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CurrencyInput } from '../src';

storiesOf('CurrencyInput', module)
  .add('default props', () => (
    <CurrencyInput onChange={action('onChange')} />
  ))
  .add('allow negative', () => (
    <CurrencyInput allowNegative onChange={action('onChange')} />
  ))
  .add('disallow decimal', () => (
    <CurrencyInput allowDecimal={false} onChange={action('onChange')} />
  ))
  .add('disallow comma', () => (
    <CurrencyInput includeThousandsSeparator={false} onChange={action('onChange')} />
  ))
  .add('right aligned', () => (
    <CurrencyInput
      inputProps={{ className: 'text-right' }}
      onChange={action('onChange')}
    />
  ));
