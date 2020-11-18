import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text, select } from '@storybook/addon-knobs';
import { Alert, FormLabelGroup } from '../src';

storiesOf('FormLabelGroup', module)
  .add('Live example', () => (
    <div>
      <FormLabelGroup
        label={text('label', 'Some Input')}
        labelSize={select('labelSize', ['sm', 'md', 'lg'], 'md')}
        feedback={text('feedback', 'You must give a first name')}
        validFeedback={text('validFeedback')}
        hint={text('hint', '')}
        width={object('width', {})}
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
