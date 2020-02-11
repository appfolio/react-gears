import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text, select } from '@storybook/addon-knobs';
import { Label, CheckboxInput, Alert, FormLabelGroup, HelpBubble } from '../src';

storiesOf('FormLabelGroup', module)
  .add('Live example', () => {
    const { checked, setChecked } = useState(false);

    return <div>
      <FormLabelGroup
        label={<Fragment><Label for="should-eat-cake">Should eat cake?</Label><HelpBubble className="ml-1" placement="top" title="" >Cake will make you fat though.</HelpBubble></Fragment>}
        labelSize={select('labelSize', ['sm', 'md', 'lg'], 'md')}
        feedback={text('feedback', 'You must give a first name')}
        validFeedback={text('validFeedback')}
        hint={text('hint', '')}
        width={object('width', {})}
        required={boolean('required', false)}
        inline={boolean('inline', false)}
        stacked={boolean('stacked', false)}
      >

        <CheckboxInput
          type='checkbox'
          id='should-eat-cake'
          onChange={() => setChecked(!checked)}
          value={checked}
        />
      </FormLabelGroup>
    </div>;
  });
