import React from 'react';
import { Button, FeatureBanner } from '../src';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

storiesOf('FeatureBanner', module)
  .addWithInfo('Live example', () => {
    const button = (
      <Button className="mr-1 mt-1" color="primary" outline disabled={false}>
        Click Me
      </Button>
    );
    const children = [button, button];
    const subtitle = text('subtitle', 'View all text messages sent by your company from this page.');
    return (
      <FeatureBanner
        title="Company-Wide View of Text Messages"
        subtitle={subtitle}
        children={children}
      />
    );
  });
