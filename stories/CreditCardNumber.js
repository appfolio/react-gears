import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { CreditCardNumber } from '../src';

storiesOf('CreditCardNumber', module)
  .addWithInfo('default props', () => (
    <CreditCardNumber />
  ))
  .addWithInfo('only allow Visa', () => (
    <div>
      <p>
        Entering a valid VISA number works, but MasterCard, AMEX, JCB,
        or other card types are rejected.
      </p>
      <p>
        An example of a valid VISA is:
        <blockquote><pre>4111 1111 1111 1111</pre></blockquote>
        An example of a valid MasterCard is:
        <blockquote><pre>5105 1051 0510 5100</pre></blockquote>
      </p>
      <CreditCardNumber allowedBrands={['visa']} />
    </div>
  ))
;
