import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text, select } from '@storybook/addon-knobs';
import { FormRow } from '../src';

storiesOf('FormRow', module)
  .add('Live example', () => (
    <div>
      <FormRow
        label={text('label', 'First Name')}
        labelSize={select('labelSize', ['sm', 'md', 'lg'], 'md')}
        feedback={text('feedback', 'You must give a first name')}
        validFeedback={text('validFeedback')}
        hint={text('hint', '')}
        width={object('width', {})}
        required={boolean('required', false)}
        inline={boolean('inline', false)}
        stacked={boolean('stacked', false)}
        type={select('type', ['checkbox', 'number', 'password', 'static', 'text'], 'text')}
        value={text('value', 'Hello World')}
      />
    </div>
  ));
