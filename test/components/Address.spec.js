import 'jsdom-global/register';

/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { Address } from '../../src';

describe('<Address />', () => {
  it('should render correctly', () => {
    const component = mount(<Address />);
    assert(component);
  });

  it('should default to US');
  it('should default to specified props');
  it('should trigger on change when updated');
});
