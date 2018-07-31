import React from 'react';
import { Button, FeatureBanner, Icon } from '../src';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

storiesOf('FeatureBanner', module)
  .addWithInfo('Live example', () => (
    <FeatureBanner
      alertText={text('alertText', 'New')}
      color={select('color', ['', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'], FeatureBanner.defaultProps.color)}
      title={text('title', 'Company-Wide View of Text Messages')}
      subtitle={text('subtitle', 'View all text messages sent by your company from this page.')}
    >
      <Button color="primary" outline className="font-weight-bold text-uppercase">
        <Icon name="envelope" className="mr-2" />
        Feedback
      </Button>
    </FeatureBanner>
  ));
