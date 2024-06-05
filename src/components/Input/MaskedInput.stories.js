import React from 'react';
import MaskedInput from './MaskedInput';

export default {
  title: 'MaskedInput',
  component: MaskedInput,
  parameters: {
    sourceLink: 'Input/MaskedInput.tsx',
  },
};

export const PhoneNumber = (args) => (
  <MaskedInput
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    {...args}
  />
);
PhoneNumber.args = {
  placeholder: '(555) 495-3947',
  guide: false,
  placeholderChar: undefined,
  keepCharPositions: false,
  showMask: false,
};
