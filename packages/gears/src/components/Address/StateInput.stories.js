import { action } from '@storybook/addon-actions';
import React from 'react';
import StateInput from './StateInput';

export default {
  title: 'AddressInput',
  component: StateInput,
};

export const State = () => <StateInput onChange={action('onChange')} />;
