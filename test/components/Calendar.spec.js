/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { Calendar } from '../../src';

describe('<Calendar />', () => {
  it('should render correctly', () => {
    const component = mount(<Calendar />);

    assert(component);
  });

  it('should default to current month and today'); // TODO
  it('should render the specified month and date'); // TODO
  it('should call onSelect when clicked'); // TODO
});
