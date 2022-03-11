import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';

import { Progress } from '../../src';

describe('<Progress />', () => {
  it('should render correctly', () => {
    const component = mount(<Progress />);
    assert(component);
  });

  it('should render with the correct default props', () => {
    const component = mount(<Progress />);
    const props = component.props();
    assert.equal(props.animated, true);
  });
});
