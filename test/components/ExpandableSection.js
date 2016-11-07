/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import ExpandableSection from '../../src/components/ExpandableSection.js';

describe('<ExpandableSection />', () => {
  it('should render correctly', () => {
    const component = mount(<ExpandableSection />);
    assert(component);
  });

  it('should be closed by default', () => {
    const component = mount((
      <ExpandableSection title="Open">
        <h1 id="child">Hello World!</h1>
      </ExpandableSection>)
    );
    assert(component.find('#child').length === 0);
  });

  it('should be closed when false passed as prop', () => {
    const component = mount((
      <ExpandableSection title="Open" open={false}>
        <h1 id="child">Hello World!</h1>
      </ExpandableSection>)
    );
    assert(component.find('#child').length === 0);
  });

  it('should be open when true passed as prop', () => {
    const component = mount((
      <ExpandableSection title="Open" open>
        <h1 id="child">Hello World!</h1>
      </ExpandableSection>)
    );
    assert(component.find('#child').length === 1);
  });

  it('should be open when clicked', () => {
    const component = mount((
      <ExpandableSection title="Open">
        <h1 id="child">Hello World!</h1>
      </ExpandableSection>)
    );
    assert(component.find('#child').length === 0, 'inner block should not be visible');
    component.find('header').simulate('click');
    assert(component.find('#child').length === 1, 'inner block should be visible');
  });
});
