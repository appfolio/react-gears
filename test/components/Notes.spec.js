/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { Notes } from '../../src';
import { shallow } from 'enzyme';

describe('<Notes />', () => {
  const component = shallow(<Notes />);
  it('should render correctly', () => {
    assert(component);
  });

  // TODO
});
