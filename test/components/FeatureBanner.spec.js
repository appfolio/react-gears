import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { FeatureBanner } from '../../src';

describe('<FeatureBanner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FeatureBanner title='test' subtitle='is fun' />);
  });

  it('should have the correct props', () => {
    assert.equal(wrapper.prop('title'), 'test');
    assert.equal(wrapper.prop('subtitle'), 'is fun');
  });

  it('renders default alertText', () => {
    assert.equal(wrapper.ref('alertText').text(), FeatureBanner.defaultProps.alertText);
  });

  it('renders passed in alertText', () => {
    wrapper = mount(<FeatureBanner title='test' subtitle='is fun' alertText='whatever' />);
    assert.equal(wrapper.ref('alertText').text(), 'whatever');
  });

  it('renders passed in title', () => {
    assert.equal(wrapper.ref('title').text(), 'test');
  });

  it('renders passed in subtitle', () => {
    assert.equal(wrapper.ref('subtitle').text(), 'is fun');
  });
});

