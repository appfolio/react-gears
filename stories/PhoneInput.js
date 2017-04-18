import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text, select } from '@kadira/storybook-addon-knobs';
import { PhoneInput } from '../src';
import labels from '../src/components/phone/labels';

storiesOf('PhoneInput', module)
  .addWithInfo('uncontrolled', () => (
    <div>
      <PhoneInput
        defaultValue={{
          label: 'Mobile',
          number: '805 123 4567'
        }}
        onChange={action('phone onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ))
  .addWithInfo('controlled', () => (
    <div>
      <PhoneInput
        value={{
          label: select('labels', labels.map(l => l.value), 'Mobile'),
          number: text('number', '805 123 4567')
        }}
        onChange={action('phone onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ));
