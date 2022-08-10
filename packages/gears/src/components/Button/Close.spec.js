import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Close from './Close';

describe('<Close />', () => {
  const component = mount(<Close />);
  it('should render correctly', () => {
    assert(component);
  });
});
