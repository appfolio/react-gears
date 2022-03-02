import React from 'react';
import { text } from '@storybook/addon-knobs';

import Dummy from '../src/components/Dummy';

export default {
  title: 'Dummy',
  component: Dummy,
};

export const DummyExample = () => {
  const things = [{ foo: 'One' }, { foo: 'Two' }];
  return <Dummy name={text('name', 'JKane')} expanded={things[0]} />;
};
