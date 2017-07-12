import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { FormRow } from '../src';

storiesOf('FormRow', module)
  .addWithInfo('Live example', () => (
    <div>
      <FormRow
        label={text('label', 'First Name')}
        feedback={text('feedback', 'You must give a first name')}
        color={select('color', ['', 'success', 'warning', 'danger'], 'danger')}
        hint={text('hint', '')}
        required={boolean('required', false)}
        inline={boolean('inline', false)}
        stacked={boolean('stacked', false)}
      />
    </div>
  ));
