import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text, select } from '@storybook/addon-knobs';
import { FormRow } from '../src';

const description = `
  Represents a form group consisting of a label + input, with built-in support for hint and
  feedback.  If the input "type" property is not specified, then type "text" is used by default.
`;

storiesOf('FormRow', module)
  .addWithInfo('Live example', description, () => (
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
      />
    </div>
  ));
