import { action } from '@storybook/addon-actions';
import * as knobs from '@storybook/addon-knobs';
import React from 'react';
import { buttonColors } from '../../tooling/colors';
import FeedbackButton from './FeedbackButton';

export default {
  title: 'FeedbackButton',
  component: FeedbackButton,
  parameters: {
    sourceLink: 'FeedbackButton/FeedbackButton.tsx',
  },
};

export const Default = () => (
  <FeedbackButton
    backdrop={knobs.boolean('backdrop', false)}
    className={knobs.text('className', '')}
    color={knobs.select('color', buttonColors, 'default')}
    disabled={knobs.boolean('disabled', false)}
    doSubmit={async () => {
      action('doSubmit');
    }}
    feature={knobs.text('feature', 'default')}
    modalTitle={knobs.text('modalTitle', 'Modal Title')}
    outline={knobs.boolean('outline', false)}
    recipient={knobs.text('recipient', 'my_team_name')}
  />
);

export const AllProps = () => (
  <FeedbackButton
    backdrop={knobs.boolean('backdrop', false)}
    block={knobs.boolean('block', false)}
    cancelButtonText={knobs.text('cancelButtonText', 'Cancel')}
    className={knobs.text('className', '')}
    color={knobs.select('color', buttonColors, 'default')}
    commentIncluded={knobs.boolean('commentIncluded', false)}
    commentPlaceholder={knobs.text(
      'commentPlaceholder',
      'Please give as much detail as you can. Thanks!'
    )}
    commentRequired={knobs.boolean('commentRequired', false)}
    commentSubtitle={knobs.text(
      'commentSubtitle',
      'How could we improve the way this works for you?'
    )}
    disabled={knobs.boolean('disabled', false)}
    doSubmit={async () => {
      action('doSubmit');
    }}
    feature={knobs.text('feature', 'default')}
    highRatingText={knobs.text('highRatingText', 'Very satisfied')}
    lowRatingText={knobs.text('lowRatingText', 'Not satisfied at all')}
    modalTitle={knobs.text('modalTitle', 'Give Feedback')}
    outline={knobs.boolean('outline', false)}
    pleaseWaitButtonText={knobs.text('pleaseWaitButtonText', 'Please Wait...')}
    ratingIncluded={knobs.boolean('ratingIncluded', false)}
    ratingRequired={knobs.boolean('ratingRequired', false)}
    ratingSubtitle={knobs.text(
      'ratingSubtitle',
      'So far, how satisfied are you with this feature?'
    )}
    recipient={knobs.text('recipient', 'recipient@example.com')}
    size={knobs.select('size', ['lg', 'md', 'sm'], 'md')}
    submitButtonText={knobs.text('submitButtonText', 'Send')}
  />
);
