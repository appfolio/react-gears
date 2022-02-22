import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { SummaryBox, SummaryBoxItem } from '../../src';

const items = [
  { value: 'Alpha', label: 'Team' },
  { value: 'Bravo', label: 'Johnny' },
  { value: 'Charlie', label: 'Brown' },
];

describe('<SummaryBox />', () => {
  it('should render correctly', () => {
    const component = shallow(<SummaryBox />);
    assert(component);
  });

  it('should allow arbitrary props', () => {
    const component = shallow(<SummaryBox id="fred" />);

    assert(component.find('#fred').exists());
  });

  it('should render items as SummaryBoxItems', () => {
    const component = shallow(
      <SummaryBox items={items}>
        <span>Hi</span>
      </SummaryBox>
    );
    const children = component.find(SummaryBoxItem);
    assert.equal(children.length, items.length);
    assert.equal(component.find('span').length, 0);

    children.forEach((child, i) => {
      assert.equal(child.prop('value'), items[i].value);
      assert.equal(child.prop('label'), items[i].label);
    });
  });

  it('should reverse all items when specified', () => {
    const component = shallow(<SummaryBox items={items} reverse />);
    const children = component.find(SummaryBoxItem);
    children.forEach((child) => assert.equal(child.prop('reverse'), true));
  });

  it('should not reverse all items when specified', () => {
    const component = shallow(<SummaryBox items={items} reverse={false} />);
    const children = component.find(SummaryBoxItem);
    children.forEach((child) => assert.equal(child.prop('reverse'), false));
  });

  it('should render children', () => {
    const component = shallow(
      <SummaryBox>
        <span>foo</span>
      </SummaryBox>
    );

    const children = component.find(SummaryBoxItem);
    assert.equal(children.length, 0);
    assert.equal(component.find('span').text(), 'foo');
  });
});
