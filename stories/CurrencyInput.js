import React from 'react';
import { storiesOf } from '@storybook/react';
import { CurrencyInput } from '../src';

storiesOf('CurrencyInput', module)
  .add('default props', () => (
    <CurrencyInput />
  ))
  .add('allow negative', () => (
    <CurrencyInput allowNegative />
  ))
  .add('disallow decimal', () => (
    <CurrencyInput allowDecimal={false} />
  ))
  .add('disallow comma', () => (
    <CurrencyInput includeThousandsSeparator={false} />
  ));
