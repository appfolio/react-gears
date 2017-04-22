import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { Alert, Button, FeatureBanner } from '../../src';

describe('<FeatureBanner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FeatureBanner title='test' subtitle='is fun'/>);
  });

  it('should have the correct props', () => {
    assert.equal(wrapper.prop('title'), 'test');
    assert.equal(wrapper.prop('subtitle'), 'is fun');
  });

  it('renders an Alert with color info', () => {
    assert.equal(wrapper.find(Alert).length, 1);
    assert.equal(wrapper.find(Alert).prop('color'), 'info');
  });

  it('renders default alertText', () => {
    assert.equal(wrapper.find('span').first().text(), 'new');
  });

  it('renders passed in alertText', () => {
    wrapper = mount(<FeatureBanner title='test' subtitle='is fun' alertText='whatever'/>);
    assert.equal(wrapper.find('span').first().text(), 'whatever');
  });

  it('renders passed in title', () => {
    assert.equal(wrapper.find('.js-title').text(), 'test');
  });

  it('renders passed in subtitle', () => {
    assert.equal(wrapper.find('.js-subtitle').text(), 'is fun');
  });
});

