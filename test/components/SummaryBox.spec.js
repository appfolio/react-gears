import 'jsdom-global/register';

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { SummaryBox, SummaryBoxItem } from '../../src';

describe('<SummaryBox />', () => {
  it('should render correctly', () => {
    const component = shallow(<SummaryBox />);
    assert(component);
  });

  it('should render items as SummaryBoxItems', () => {
    const items = [
      { value: 'Alpha', label: 'Team' },
      { value: 'Bravo', label: 'Johnny' },
      { value: 'Charlie', label: 'Brown' }
    ];
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
