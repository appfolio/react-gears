/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';

import Select from '../../src/components/Select.js';

const OPTIONS = [
  { label: 'Eeny', value: 1 },
  { label: 'Meeny', value: 2 },
  { label: 'Miny', value: 3 },
  { label: 'Moe', value: 4 }
];
describe('<Select />', () => {
  it('should render correctly', () => {
    const component = shallow(<Select options={OPTIONS} />);
    assert(component);
  });

  it('should not have a default value if not specified');

  it('should have a default value if specified');
});
