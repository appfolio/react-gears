import { action } from '@storybook/addon-actions';
import React from 'react';
import CountryInput from './CountryInput';

export default {
  title: 'AddressInput',
  component: CountryInput,
  parameters: {
    sourceLink: 'Address/CountryInput.tsx',
  },
};

export const Country = () => <CountryInput onChange={action('onChange')} />;
