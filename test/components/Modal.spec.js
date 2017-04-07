/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { Modal } from '../../src';

describe('<Modal />', () => {
  const component = mount(<Modal />);
  it('should render correctly', () => {
    assert(component);
  });
});
