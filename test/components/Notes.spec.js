/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { Notes } from '../../src';
import { mount } from 'enzyme';

describe('<Notes />', () => {
  const notes = [
    { date: new Date(), text: 'Alpha' },
    { date: new Date(), text: 'Bravo' },
    { date: new Date(), text: 'Charlie' },
    { date: new Date(), text: 'Delta' }
  ];
  const component = mount(<Notes notes={notes} />);

  it('should render correctly', () => {
    assert(component);
    assert.equal(component.find('Note').nodes.length, notes.length);
  });

  // TODO - refs do not work on child components, having difficult testing these:
  it('should render each Note correctly');
  it('should pass onClick handlers to each child');
});
