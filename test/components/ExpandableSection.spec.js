import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { ExpandableSection } from '../../src';

describe('<ExpandableSection />', () => {
  it('should be closed by default', () => {
    const component = shallow(
      <ExpandableSection title="Open">
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find('h1').length, 0);
  });

  it('should be closed when false passed as prop', () => {
    const component = shallow(
      <ExpandableSection title="Open" open={false}>
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find('h1').length, 0);
  });

  it('should be open when true passed as prop', () => {
    const component = shallow(
      <ExpandableSection title="Open" open>
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find('h1').length, 1);
  });

  it('should be open when clicked', () => {
    const component = shallow(
      <ExpandableSection title="Open">
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find('h1').length, 0, 'inner block should not be visible');
    component.find('header').simulate('click');
    assert.equal(component.find('h1').length, 1, 'inner block should be visible');
  });
});
