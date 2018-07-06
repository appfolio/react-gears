import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Alert, FormLabelGroup } from '../src';

const description = `
  Represents a form group consisting of a label + children, with built-in support for hint and
  feedback.
`;

storiesOf('FormLabelGroup', module)
  .addWithInfo('Live example', description, () => (
    <div>
      <FormLabelGroup
        label={text('label', 'Some Input')}
        labelSize={select('labelSize', ['sm', 'md', 'lg'], 'md')}
        feedback={text('feedback', 'You must give a first name')}
        validFeedback={text('validFeedback')}
        hint={text('hint', '')}
        required={boolean('required', false)}
        inline={boolean('inline', false)}
        stacked={boolean('stacked', false)}
      >
        <Alert color="info" className="text-center p-4 mb-0" style={{ borderStyle: 'dashed' }}>
          Your content here
        </Alert>
      </FormLabelGroup>
    </div>
  ));
