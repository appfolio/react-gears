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

  it('should render correctly', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = mount(<Notes notes={notes} />, { attachTo: div });

    assert(component);
    assert.equal(component.find('Note').length, notes.length);
  });

  // TODO - refs do not work on child components, having difficult testing these:
  it('should render each Note correctly');
  it('should pass onClick handlers to each child');
});
