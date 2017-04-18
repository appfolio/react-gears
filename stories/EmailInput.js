import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';
import { EmailInput } from '../src';

storiesOf('EmailInput', module)
  .addWithInfo('uncontrolled', () => (
    <div>
      <EmailInput
        defaultValue={{
          emailAddress: 'a@b.com'
        }}
        onChange={action('email onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ))
  .addWithInfo('controlled', () => (
    <div>
      <EmailInput
        value={{
          emailAddress: text('emailAddress', 'a@b.com')
        }}
        onChange={action('email onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ));
