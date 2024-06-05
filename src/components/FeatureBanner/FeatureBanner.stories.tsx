import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors } from '../../tooling/colors';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import FeatureBanner from './FeatureBanner';

const meta: Meta<typeof FeatureBanner> = {
  title: 'FeatureBanner',
  component: FeatureBanner,
  parameters: {
    sourceLink: 'FeatureBanner/FeatureBanner.tsx',
  },
  argTypes: {
    color: {
      options: colors,
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureBanner>;

export const LiveExample: Story = {
  args: {
    alertText: 'New',
    color: 'info',
    title: 'Company-Wide View of Text Messages',
    subtitle: 'View all text messages sent by your company from this page.',
  },
  render: (args) => (
    <FeatureBanner {...args}>
      <Button color="primary" outline className="fw-bold text-uppercase">
        <Icon name="envelope" className="me-2" />
        Feedback
      </Button>
    </FeatureBanner>
  ),
};
