import React from 'react';
import Icon from '../Icon/Icon';
import Waiting from './Waiting';

export default {
  title: 'Waiting',
  component: Waiting,
  parameters: {
    sourceLink: 'Waiting/Waiting.tsx',
    docs: {
      // contain modal within iframe to enable user interaction
      // https://github.com/storybookjs/storybook/issues/16949#issuecomment-1106586570
      // unfortunately, it seems to break the controls functionality, but only in the Docs view
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
};

export const Default = (args) => <Waiting {...args} />;
Default.args = {
  isOpen: true,
  backdrop: true,
};

export const CustomTitle = (args) => <Waiting {...args} />;
CustomTitle.args = {
  isOpen: true,
  backdrop: true,
  title: 'Please wait for this thing',
};

export const Children = (args) => (
  <Waiting {...args}>
    <Icon name="clock" size="4x" />
  </Waiting>
);
Children.args = {
  isOpen: true,
  backdrop: true,
};
