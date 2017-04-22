import React from 'react';
import { Button, FeatureBanner, Icon } from '../src';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

storiesOf('FeatureBanner', module)
  .addWithInfo('Live example', () => (
      <FeatureBanner
        alertText={text('alertText', 'New')}
        title={text('title', 'Company-Wide View of Text Messages')}
        subtitle={text('subtitle', 'View all text messages sent by your company from this page.')}
      >
        <Button className="font-weight-bold text-uppercase bg-muted text-primary" outline>
          <Icon name="envelope" className="mr-2" />
          Feedback
        </Button>
      </FeatureBanner>
    ));
