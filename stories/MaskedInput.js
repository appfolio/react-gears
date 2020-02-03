import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { MaskedInput } from '../src';

storiesOf('MaskedInput', module)
  .add('Phone number', () => (
    <MaskedInput
      placeholder={text('placeholder', '(555) 495-3947')}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      guide={boolean('guide', false)}
      placeholderChar={text('placeholderChar', undefined)}
      keepCharPositions={boolean('keepCharPositions', false)}
      showMask={boolean('showMask', false)}
    />
  ));
