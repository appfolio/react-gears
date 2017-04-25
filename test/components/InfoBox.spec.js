/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { InfoBox } from '../../src';

describe.only('<InfoBox />', () => {
  it('renders passed in props', () => {
    const wrapper = mount(<InfoBox title='Bravo' color="success" icon='check' className="slick">Charlie</InfoBox>);

    assert.equal(wrapper.ref('title').text(), 'Bravo');
    assert(wrapper.ref('icon'));
    assert.equal(wrapper.ref('children').text(), 'Charlie');
    assert(wrapper.hasClass('slick'));
    assert(wrapper.hasClass('text-success')); // TODO assumes internal details
  });

  it('does not render header if title not specified', () => {
    const wrapper = mount(<InfoBox icon='check'>Delta</InfoBox>);
    assert.equal(wrapper.ref('title').nodes.length, 0);
    assert.equal(wrapper.ref('icon').nodes.length, 0);
  });

  it('does not render icon if not specified', () => {
    const wrapper = mount(<InfoBox title='Foxtrot'>Delta</InfoBox>);
    assert.equal(wrapper.ref('icon').nodes.length, 0);
  });
});

