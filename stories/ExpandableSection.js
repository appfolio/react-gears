import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { ExpandableSection } from '../src';

storiesOf('ExpandableSection', module)
  .addWithInfo('Default', () => (
    <ExpandableSection title={text('title', 'Click to expand me')}>
      <h2>BOO!</h2>
    </ExpandableSection>
  ))
  .addWithInfo('Open', () => (
    <ExpandableSection
      title={text('title', 'Expanded by default')}
      open
    >
      <h2>BOO!</h2>
    </ExpandableSection>
  ));
