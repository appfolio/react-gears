import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';

import { ScrollContainer } from '../../src';

describe('<ScrollContainer />', () => {
  it('should render correctly', () => {
    const component = mount(
      <ScrollContainer>
        <div style={{ minHeight: '200px' }} />
      </ScrollContainer>
    );
    assert(component);
  });

  it('should not overflow when children less than width and no height specified', () => {});
  it('should overflow horizontally', () => {});
  it('should overflow vertically when height is specified', () => {});
});
