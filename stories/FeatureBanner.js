import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { Button, FeatureBanner, Icon } from '../src';
import { colors } from './colors';

storiesOf('FeatureBanner', module)
  .add('Live example', () => (
    <FeatureBanner
      alertText={text('alertText', 'New')}
      color={select('color', ['', ...colors], FeatureBanner.defaultProps.color)}
      title={text('title', 'Company-Wide View of Text Messages')}
      subtitle={text('subtitle', 'View all text messages sent by your company from this page.')}
    >
      <Button color="primary" outline className="font-weight-bold text-uppercase">
        <Icon name="envelope" className="mr-2" />
        Feedback
      </Button>
    </FeatureBanner>
  ));
