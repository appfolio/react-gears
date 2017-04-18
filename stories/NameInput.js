import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text, select } from '@kadira/storybook-addon-knobs';
import { NameInput } from '../src';
import salutations from '../src/components/name/salutations';

storiesOf('NameInput', module)
  .addWithInfo('uncontrolled', () => (
    <div>
      <NameInput
        defaultValue={{
          salutation: 'Dr.',
          firstName: 'What',
          lastName: 'Ever',
          companyName: 'Test'
        }}
        onChange={action('name onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ))
  .addWithInfo('controlled', () => (
    <div>
      <NameInput
        value={{
          salutation: select(
            'salutation',
            salutations.map(s => s.value),
            'Dr.'
          ),
          firstName: text('firstName', 'What'),
          lastName: text('lastName', 'Ever'),
          companyName: text('companyName', 'Test')
        }}
        onChange={action('name onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ));
