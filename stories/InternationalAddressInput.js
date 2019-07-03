import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs';
import uncontrollable from 'uncontrollable';
import { InternationalAddressInput } from '../src';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledInternationalAddressInput = uncontrollable(InternationalAddressInput, { value: 'onChange' });
UncontrolledInternationalAddressInput.displayName = 'InternationalAddressInput';

storiesOf('InternationalAddressInput', module)
  .addWithInfo('Live Example', () => (
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
  ));

