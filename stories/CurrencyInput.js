import React from 'react';
import { storiesOf } from '@kadira/storybook';

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
