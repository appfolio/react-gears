import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { MaskedInput } from '../src';

export default {
  title: 'MaskedInput',
  component: MaskedInput,
};

export const PhoneNumber = () => (
  <MaskedInput
    placeholder={text('placeholder', '(555) 495-3947')}
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    guide={boolean('guide', false)}
    placeholderChar={text('placeholderChar', undefined)}
    keepCharPositions={boolean('keepCharPositions', false)}
    showMask={boolean('showMask', false)}
  />
);
