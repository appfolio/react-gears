import { action } from '@storybook/addon-actions';
import React from 'react';
import uncontrollable from 'uncontrollable';
import InternationalAddressInput from './InternationalAddressInput';

export default {
  title: 'AddressInput',
  component: InternationalAddressInput,
  parameters: {
    sourceLink: 'Address/InternationalAddressInput.tsx',
  },
};

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledInternationalAddressInput = uncontrollable(InternationalAddressInput, {
  value: 'onChange',
});
UncontrolledInternationalAddressInput.displayName = 'InternationalAddressInput';

export const International = (args) => (
  <div>
    <UncontrolledInternationalAddressInput {...args} />
  </div>
);
International.args = {
  showLabels: InternationalAddressInput.defaultProps.showLabels,
  onBlur: action('address onBlur'),
  onChange: action('address onChange'),
  disabled: undefined,
  error: {},
  labels: InternationalAddressInput.defaultProps.labels,
  hints: InternationalAddressInput.defaultProps.hints,
};
International.argTypes = {
  disabled: {
    control: 'boolean',
  },
};
