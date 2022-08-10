import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import SummaryBoxItem from './SummaryBoxItem';

describe('<SummaryBoxItem />', () => {
  it('should render correctly', () => {
    const component = mount(<SummaryBoxItem label="Hello" value="World" />);
    assert(component);
    assert(component.find('.h3').text(), 'Hello');
    assert(component.find('span').text(), 'World');
  });

  it('should show the default label and value if none specified', () => {
    const component = mount(<SummaryBoxItem />);
    assert(component);
    assert(component.find('.h3').text(), '--');
    assert(component.find('span').text(), '--');
  });

  it('should reverse when specified', () => {
    const component = mount(<SummaryBoxItem id="mertz" reverse />);
    assert(component.find('.flex-column-reverse').exists());
  });

  it('should reverse when specified', () => {
    const component = mount(<SummaryBoxItem id="mertz" reverse={false} />);
    assert(component.find('.flex-column').exists());
  });

  it('should allow arbitrary props', () => {
    const component = mount(<SummaryBoxItem id="mertz" />);
    assert(component.find('#mertz').exists());
  });
});
