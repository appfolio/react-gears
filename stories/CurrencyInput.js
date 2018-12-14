import React from 'react';
import { action, storiesOf } from '@storybook/react';

import { CurrencyInput } from '../src';

storiesOf('CurrencyInput', module)
  .addWithInfo('default props', () => (
    <CurrencyInput onChange={action('onChange')} />
  ))
  .addWithInfo('allow negative', () => (
    <CurrencyInput allowNegative onChange={action('onChange')} />
  ))
  .addWithInfo('disallow decimal', () => (
    <CurrencyInput allowDecimal={false} onChange={action('onChange')} />
  ))
  .addWithInfo('disallow comma', () => (
    <CurrencyInput includeThousandsSeparator={false} onChange={action('onChange')} />
  ));
