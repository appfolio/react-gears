import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { InfoBox } from '../src';

storiesOf('InfoBox', module)
  .add('Live example', () => (
    <div className="bg-light p-4">
      <div className="text-muted mb-3">
        <em>(Background color added for contrast)</em>
      </div>
      <InfoBox
        color={select('color', [null, 'primary', 'info', 'success', 'warning', 'danger', 'muted'], 'success')}
        title={text('title', '$86,753.09')}
        icon={text('icon', 'check')}
        vertical={boolean('vertical', false)}
      >
        {text('children', 'Jenny, I got your number')}
      </InfoBox>
    </div>
  ));

