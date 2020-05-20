import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { PatternInput } from '../src';

storiesOf('PatternInput', module)
  .add('Live example', () => {
    const [value, setValue] = useState('');
    const pattern = text('pattern', '^\\d{0,3}(\\.\\d{0,2})?$');
    return (
      <PatternInput
        pattern={new RegExp(pattern)}
        restrictInput={boolean('restrictInput', true)}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  });
