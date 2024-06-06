import React from 'react';
import { colors } from '../../tooling/colors';
import InfoBox from './InfoBox';

export default {
  title: 'InfoBox',
  component: InfoBox,
  parameters: {
    sourceLink: 'InfoBox/InfoBox.tsx',
  },
};

export const LiveExample = ({ color, title, icon, vertical, children }) => (
  <div className="bg-light p-4">
    <div className="text-muted mb-3">
      <em>(Background color added for contrast)</em>
    </div>
    <InfoBox color={color} title={title} icon={icon} vertical={vertical}>
      {children}
    </InfoBox>
  </div>
);
LiveExample.args = {
  color: 'success',
  title: '$86,753.09',
  icon: 'check',
  vertical: false,
  children: 'Jenny, I got your number',
};
LiveExample.argTypes = {
  color: {
    control: { type: 'select' },
    options: colors,
  },
};
