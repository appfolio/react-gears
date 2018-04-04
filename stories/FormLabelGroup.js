import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { AddressInput, FormLabelGroup } from '../src';

storiesOf('FormLabelGroup', module)
  .addWithInfo('Live example', () => (
    <div>
      <FormLabelGroup
        label={text('label', 'Some Input')}
        feedback={text('feedback', 'You must give a first name')}
        color={select('color', ['', 'success', 'warning', 'danger'], 'danger')}
        hint={text('hint', '')}
        required={boolean('required', false)}
        inline={boolean('inline', false)}
        stacked={boolean('stacked', false)}
      >
        <img alt="Sample" src="https://placeimg.com/320/240/tech" width="320" height="240" />
      </FormLabelGroup>
    </div>
  ));
