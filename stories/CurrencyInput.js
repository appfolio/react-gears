import React from 'react';
import { storiesOf } from '@storybook/react';

import { CurrencyInput } from '../src';

storiesOf('CurrencyInput', module)
  .addWithInfo('default props', () => (
    <CurrencyInput />
  ))
  .addWithInfo('allow negative', () => (
    <CurrencyInput allowNegative />
  ))
  .addWithInfo('disallow decimal', () => (
    <CurrencyInput allowDecimal={false} />
  ))
  .addWithInfo('disallow comma', () => (
    <CurrencyInput includeThousandsSeparator={false} />
  ));
