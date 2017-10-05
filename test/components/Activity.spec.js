import React from 'react';
import assert from 'assert';
import fecha from 'fecha';
import { shallow } from 'enzyme';

import { Activity, Col } from '../../src';

describe('<Activity />', () => {
  const props = {
    createdAt: new Date(),
    action: 'Created',
    createdBy: 'services'
  };
  const TIME_FORMAT = 'MM/DD/YYYY hh:mm A';

  it('should render correctly', () => {
    const component = shallow(<Activity {...props} />);
    assert(component);
    assert.equal(fecha.format(props.createdAt, TIME_FORMAT), component.find(Col).nodes[0].props.children);
    assert.equal(props.action, component.find('span.font-weight-bold').text());
    assert.equal(` by ${props.createdBy}`, component.find('span.font-italic').text());
  });

  it('should render the children correctly', () => {
    const component = shallow(
      <Activity {...props}>
        Please contact HR for details.
      </Activity>
    );
    assert(component);
    assert.equal('Please contact HR for details.', component.find('.test-activity_children').text());
  });
});
