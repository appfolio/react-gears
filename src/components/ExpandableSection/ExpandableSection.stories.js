import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import Button from '../Button/Button';
import ExpandableSection from './ExpandableSection';

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

export const Header = () => (
  <ExpandableSection
    title={
      <>
        <h4 className="m-0">Here&apos;s a Header with</h4>
        <Button
          color="link"
          className="ms-auto"
          href="https://www.google.com"
          onClick={(e) => e.stopPropagation()}
        >
          Extra controls
        </Button>
      </>
    }
    open={boolean('open', true)}
    onToggle={action('onToggle')}
  >
    <h2>BOO!</h2>
  </ExpandableSection>
);
