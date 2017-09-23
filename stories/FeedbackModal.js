import React from 'react';
import { FeedbackModal } from '../src';
import { storiesOf } from '@storybook/react';

storiesOf('FeedbackModal', module)
  .addWithInfo('Live example', () => {
    const onSubmit = (values) => {
      const { rating, comment } = values;
      console.log('Rating is: ', rating);
      console.log('Comment is: ', comment);
    };

    return (
      <div>
        <FeedbackModal
          isOpen
          onSubmit={onSubmit}
        />
      </div>
    );
  });

