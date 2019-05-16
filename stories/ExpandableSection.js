import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { ExpandableSection } from '../src';

storiesOf('ExpandableSection', module)
  .addWithInfo('Default', () => (
    <ExpandableSection
      title={text('title', 'Click to expand me')}
      open={boolean('open', ExpandableSection.defaultProps.open)}
    >
      <h2>BOO!</h2>
    </ExpandableSection>
  ))
  .addWithInfo('Open', () => (
    <ExpandableSection
      title={text('title', 'Expanded by default')}
      open={boolean('open', true)}
    >
      <h2>BOO!</h2>
    </ExpandableSection>
  ));
