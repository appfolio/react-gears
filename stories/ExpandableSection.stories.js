import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ExpandableSection } from '../src';

export default {
  title: 'ExpandableSection',
  component: ExpandableSection,
};

export const Default = () => (
  <ExpandableSection
    title={text('title', 'Click to expand me')}
    open={boolean('open', ExpandableSection.defaultProps.open)}
    onToggle={action('onToggle')}
  >
    <h2>BOO!</h2>
  </ExpandableSection>
);

export const Open = () => (
  <ExpandableSection
    title={text('title', 'Expanded by default')}
    open={boolean('open', true)}
    onToggle={action('onToggle')}
  >
    <h2>BOO!</h2>
  </ExpandableSection>
);
