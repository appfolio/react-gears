import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { buttonColors } from '../../tooling/colors';
import FeedbackButton from './FeedbackButton';

const meta: Meta<typeof FeedbackButton> = {
  title: 'FeedbackButton',
  component: FeedbackButton,
  parameters: {
    sourceLink: 'FeedbackButton/FeedbackButton.tsx',
  },
  argTypes: {
    color: {
      options: buttonColors,
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['lg', 'md', 'sm'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackButton>;

export const Default: Story = {
  args: {
    backdrop: false,
    className: '',
    color: 'default',
    disabled: false,
    doSubmit: async () => {
      action('doSubmit');
    },
    feature: 'default',
    modalTitle: 'Modal Title',
    outline: false,
    recipient: 'my_team_name',
  },
  render: (args) => <FeedbackButton {...args} />,
};

export const AllProps: Story = {
  args: {
    backdrop: true,
    block: true,
    cancelButtonText: 'Cancel',
    className: '',
    color: 'default',
    commentIncluded: false,
    commentPlaceholder: 'Please give as much detail as you can. Thanks!',
    commentRequired: false,
    commentSubtitle: 'How could we improve the way this works for you?',
    disabled: false,
    doSubmit: async () => {
      action('doSubmit');
    },
    feature: 'default',
    highRatingText: 'Very satisfied',
    lowRatingText: 'Not satisfied at all',
    modalTitle: 'Give Feedback',
    outline: false,
    pleaseWaitButtonText: 'Please Wait...',
    ratingIncluded: false,
    ratingRequired: false,
    ratingSubtitle: 'So far, how satisfied are you with this feature?',
    recipient: 'recipient@example.com',
    size: 'md',
    submitButtonText: 'Send',
  },
  render: (args) => <FeedbackButton {...args} />,
};
