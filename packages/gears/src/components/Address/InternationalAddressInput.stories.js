import { action } from '@storybook/addon-actions';
import { boolean, object } from '@storybook/addon-knobs';
import React from 'react';
import uncontrollable from 'uncontrollable';
import InternationalAddressInput from './InternationalAddressInput';

export default {
  title: 'AddressInput',
  component: InternationalAddressInput,
};

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledInternationalAddressInput = uncontrollable(InternationalAddressInput, {
  value: 'onChange',
});
UncontrolledInternationalAddressInput.displayName = 'InternationalAddressInput';

export const International = () => (
  <div>
    <UncontrolledInternationalAddressInput
      showLabels={boolean('showLabel', InternationalAddressInput.defaultProps.showLabels)}
      onBlur={action('address onBlur')}
      onChange={action('address onChange')}
      disabled={boolean('disabled')}
      error={object('error', {})}
      labels={object('labels', InternationalAddressInput.defaultProps.labels)}
      hints={object('hints', InternationalAddressInput.defaultProps.hints)}
    />
  </div>
);
