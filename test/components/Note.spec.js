/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { Note } from '../../src';
import { shallow } from 'enzyme';

describe('<Note />', () => {
  const component = shallow(<Note />);
  it('should render correctly', () => {
    assert(component);
  });

  // TODO
});
