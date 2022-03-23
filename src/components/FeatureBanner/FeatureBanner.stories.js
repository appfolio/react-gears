import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import { colors } from '../../../util/colors';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import FeatureBanner from './FeatureBanner';

export default {
  title: 'FeatureBanner',
  component: FeatureBanner,
};

export const LiveExample = () => (
  <FeatureBanner
    alertText={text('alertText', 'New')}
    color={select('color', ['', ...colors], FeatureBanner.defaultProps.color)}
    title={text('title', 'Company-Wide View of Text Messages')}
    subtitle={text('subtitle', 'View all text messages sent by your company from this page.')}
  >
    <Button color="primary" outline className="fw-bold text-uppercase">
      <Icon name="envelope" className="me-2" />
      Feedback
    </Button>
  </FeatureBanner>
);
