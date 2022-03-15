import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';

import { Spinner } from '../../src';

describe('<Spinner />', () => {
  it('should render correctly', () => {
    const component = mount(<Spinner />);
    assert(component);
  });
});
