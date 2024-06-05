import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from '../Button/Button';
import ExpandableSection from './ExpandableSection';

export default {
  title: 'ExpandableSection',
  component: ExpandableSection,
  parameters: {
    sourceLink: 'ExpandableSection/ExpandableSection.tsx',
  },
};

export const Default = (args) => (
  <ExpandableSection {...args}>
    <h2>BOO!</h2>
  </ExpandableSection>
);
Default.args = {
  title: 'Click to expand me',
  open: ExpandableSection.defaultProps.open,
  onToggle: action('onToggle'),
};

export const Open = (args) => (
  <ExpandableSection {...args}>
    <h2>BOO!</h2>
  </ExpandableSection>
);
Open.args = {
  title: 'Expanded by default',
  open: true,
  onToggle: action('onToggle'),
};

export const Header = (args) => (
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
    {...args}
  >
    <h2>BOO!</h2>
  </ExpandableSection>
);
Header.args = {
  open: true,
  onToggle: action('onToggle'),
};
