/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';

import DateMonth from '../src/components/datemonth/DateMonth.js';

/**
 * Sample unit test.
 */
describe.skip('<DateMonth />', () => {
  const component = mount(<DateMonth value="Nov 1971" />);
  it('should render correctly', () => {
//    assert.equal(message.text(), 'Hello Appfolio!');
  });
});
