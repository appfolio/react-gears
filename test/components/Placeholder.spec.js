import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';

import { Placeholder } from '../../src';

describe('<Placeholder />', () => {
  it('should render correctly', () => {
    const component = mount(<Placeholder />);
    assert(component);
  });

  it('should render with the correct number of words', () => {
    const component = mount(<Placeholder words={10} />);
    assert(component.find('span').length <= 10);
  });

  it('should render with the specified size', () => {
    let component = mount(<Placeholder size="xs" words={5} />);
    assert(component.find('span').every('.placeholder-xs'));
    component = mount(<Placeholder size="sm" words={5} />);
    assert(component.find('span').every('.placeholder-sm'));
    component = mount(<Placeholder size="lg" words={5} />);
    assert(component.find('span').every('.placeholder-lg'));
  });

  it('should render with the specified color', () => {
    const colors = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];
    colors.forEach((color) => {
      const component = mount(<Placeholder color={color} words={5} />);
      assert(component.find('div').hasClass(`text-${color}`));
    });
  });

  it('should render with the specified animation', () => {
    let component = mount(<Placeholder type="glow" />);
    assert(component.find('div').hasClass('placeholder-glow'));
    assert(!component.find('div').hasClass('placeholder-wave'));

    component = mount(<Placeholder type="wave" />);
    assert(component.find('div').hasClass('placeholder-wave'));
    assert(!component.find('div').hasClass('placeholder-glow'));
  });
});
