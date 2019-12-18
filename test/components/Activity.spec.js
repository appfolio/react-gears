import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';

import { Activity } from '../../src';

describe('<Activity />', () => {
  const props = {
    date: new Date(),
    action: 'Created',
    by: 'services'
  };

  it('should render correctly', () => {
    const component = shallow(<Activity {...props} />);
    assert(component);
  });

  it('should render date', () => {
    const component = mount(<Activity date={new Date(2015, 1, 13, 12, 30)} />);
    const date = component.find('span').first();
    assert.strictEqual(date.text(), '02/13/2015 12:30 PM');
  });

  it('should render action', () => {
    const component = mount(<Activity date={new Date()} action="Eat" />);
    const action = component.find('strong');
    assert.strictEqual(action.text(), 'Eat');
  });

  it('should render by', () => {
    const component = mount(<Activity date={new Date()} action="Sleep" by="Gary Thomas" />);
    const by = component.find('span').at(1);
    assert.strictEqual(by.text(), '– Gary Thomas');
  });

  it('should render children correctly', () => {
    const component = shallow(
      <Activity {...props}>
        <div id="inner">Please contact HR for details.</div>
      </Activity>);
    assert(component);
    const inner = component.find('#inner');
    assert(inner.exists());
    assert.equal(inner.text(), 'Please contact HR for details.');
  });

  it('should support custom date formats', () => {
    const component = mount(<Activity dateFormat="M/D/YYYY" date={new Date(2010, 4, 9)} />);
    const date = component.find('span').first();
    assert.strictEqual(date.text(), '5/9/2010');
  });
});
