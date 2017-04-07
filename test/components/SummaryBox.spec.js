import 'jsdom-global/register';

/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { SummaryBox, SummaryBoxItem } from '../../src';

describe('<SummaryBox />', () => {
  it('should render correctly', () => {
    const component = mount(<SummaryBox />);
    assert(component);
  });

  it('should render items as SummaryBoxItems', () => {
    const items = [
      { value: 'Alpha', label: 'Team' },
      { value: 'Bravo', label: 'Johnny' },
      { value: 'Charlie', label: 'Brown' }
    ];
    const component = mount(<SummaryBox items={items} />);
    const children = component.find(SummaryBoxItem);
    assert(children.length, items.length);

    children.forEach((child, i) => {
      assert.equal(child.prop('value'), items[i].value);
      assert.equal(child.prop('label'), items[i].label);
    });
  });

  it('should render children', () => {
    const items = [
      { value: 'Oogah', label: 'Chaka' },
      { value: 'Milli', label: 'Vanilli' },
      { value: 'Ray', label: 'Charles' }
    ];
    const component = mount(
      <SummaryBox items={items}>
        {items.map(({ value, label }) => <SummaryBoxItem value={value} label={label} />)}
      </SummaryBox>
    );
    const children = component.find(SummaryBoxItem);
    assert(children.length, items.length);

    children.forEach((child, i) => {
      assert.equal(child.prop('value'), items[i].value);
      assert.equal(child.prop('label'), items[i].label);
    });
  });
});
