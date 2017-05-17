/* eslint-env mocha */

import React from 'react';
import assert from 'assert';
import { Callout } from '../../src';
import { mount } from 'enzyme';

describe('<Callout />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Callout>
        <h1 id="hi">Hello World!</h1>
      </Callout>
    );

    assert.equal(component.find('#hi').length, 1);
  });
});
