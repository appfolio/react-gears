import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { InfoBox } from '../src';
import { colors } from './colors';

export default {
  title: 'InfoBox',
  component: InfoBox,
};

export const LiveExample = () => (
  <div className="bg-light p-4">
    <div className="text-muted mb-3">
      <em>(Background color added for contrast)</em>
    </div>
    <InfoBox
      color={select('color', colors, 'success')}
      title={text('title', '$86,753.09')}
      icon={text('icon', 'check')}
      vertical={boolean('vertical', false)}
    >
      {text('children', 'Jenny, I got your number')}
    </InfoBox>
  </div>
);
