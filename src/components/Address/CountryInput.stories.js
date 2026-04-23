import { action } from 'storybook/actions';
import React from 'react';
import CountryInput from './CountryInput';

export default {
  title: 'AddressInput',
  component: CountryInput,
  parameters: {
    sourceLink: 'Address/CountryInput.tsx',
  },
};

export const Country = (args) => <CountryInput onChange={action('onChange')} {...args} />;
