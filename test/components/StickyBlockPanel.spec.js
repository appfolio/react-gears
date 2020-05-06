/* eslint-env mocha */

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import { StickyBlockPanel } from '../../src/';

describe('<StickyBlockPanel />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<StickyBlockPanel id="yadda" title="My Block Panel" />);

    const inner = wrapper.find('BlockPanel');
    assert.equal(inner.length, 1);
    assert.equal(inner.prop('expandable'), true);
  });
});
