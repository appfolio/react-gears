import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Callout from './Callout';

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
