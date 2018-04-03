import React from 'react';
import { AutosuggestInput } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import uncontrollable from 'uncontrollable';

import COUNTRIES from '../src/components/address/Countries.js';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledAutosuggestInput = uncontrollable(AutosuggestInput, { value: 'onChange' });
UncontrolledAutosuggestInput.displayName = 'AutosuggestInput';
UncontrolledAutosuggestInput.propTypes = AutosuggestInput.propTypes;
UncontrolledAutosuggestInput.defaultProps = AutosuggestInput.defaultProps;


storiesOf('AutosuggestInput', module)
  .addWithInfo('with options', () => (
    <UncontrolledAutosuggestInput
      className="w-100"
      disabled={boolean('disabled', false)}
      options={COUNTRIES}
      onChange={action('onChange')}
    />
  ));
