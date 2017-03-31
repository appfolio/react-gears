/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { Close } from '../../src';

describe('<Close />', () => {
  const component = mount(<Close />);
  it('should render correctly', () => {
    assert(component);
  });
});
