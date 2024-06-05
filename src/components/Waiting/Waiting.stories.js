import React from 'react';
import Icon from '../Icon/Icon';
import Waiting from './Waiting';

export default {
  title: 'Waiting',
  component: Waiting,
  parameters: {
    sourceLink: 'Waiting/Waiting.tsx',
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
