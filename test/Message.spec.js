/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';

import Message from '../src/components/Message.js';

/**
 * Sample unit test.
 */
describe('<Message />', () => {
  const message = mount(<Message />);
  it('should render correctly', () => {
    assert.equal(message.text(), 'Hello Appfolio!');
  });
});
