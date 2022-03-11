import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import { FeatureBanner } from '../../src';

describe('<FeatureBanner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FeatureBanner title="test" subtitle="is fun" />);
  });

  it('should have the correct props', () => {
    assert.equal(wrapper.prop('title'), 'test');
    assert.equal(wrapper.prop('subtitle'), 'is fun');
  });

  it('renders default alertText', () => {
    assert.equal(wrapper.find('h2').at(0).text(), FeatureBanner.defaultProps.alertText);
    assert.equal(wrapper.find('h2').at(1).text(), FeatureBanner.defaultProps.alertText);
  });

  it('renders passed in alertText', () => {
    wrapper = mount(<FeatureBanner title="test" subtitle="is fun" alertText="whatever" />);
    assert.equal(wrapper.find('h2').at(0).text(), 'whatever');
    assert.equal(wrapper.find('h2').at(1).text(), 'whatever');
  });

  it('renders passed in title', () => {
    assert.equal(wrapper.find('h3').text(), 'test');
  });

  it('renders passed in subtitle', () => {
    assert.equal(wrapper.find('p').text(), 'is fun');
  });
});
