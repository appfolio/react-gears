import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { ActivityLog, Activity } from '../../src';

describe('<ActivityLog />', () => {
  it('should render each <Activity /> correctly', () => {
    const component = mount(
      <ActivityLog>
        <Activity createdAt={new Date()} action='Edited' createdBy='Jane Doe' />
        <Activity createdAt={new Date()} action='Created' createdBy='John Doe' />
      </ActivityLog>
    );
    assert(component);
    const activities = component.find(Activity).nodes;
    assert.equal(2, activities.length);
    assert.equal('Edited', activities[0].props.action);
    assert.equal('Created', activities[1].props.action);
  });

  it('should render an empty component', () => {
    const component = mount(
      <ActivityLog />
    );
    assert(component);
    assert.equal(0, component.find(Activity).nodes.length);
  });
});
