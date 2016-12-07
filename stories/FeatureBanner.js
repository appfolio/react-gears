import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { FeatureBanner, Button, Icon } from '../src';

storiesOf('FeatureBanner', module)
  .addWithInfo('Default', () => (
    <FeatureBanner title="Company-Wide View of Text Messages" />
  ))
  .addWithInfo('With Feedback Button', () => (
    <FeatureBanner title="Company-Wide View of Text Messages">
      <Button>
        <Icon name="envelope" /> Feedback
      </Button>
    </FeatureBanner>
  ));
