import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';

import { Input, StaticInput } from '../../src';

describe('<StaticInput />', () => {
  const component = shallow(<StaticInput value="foobar" invalid />);

  it('should render with correct type', () => {
    assert.equal(component.type(), Input);
  });

  it('should have the plaintext prop', () => {
    assert.equal(component.prop('plaintext'), true);
  });

  it('should not render children', () => {
    const componentWithChildren = shallow(
      <StaticInput value="foobar" invalid>
        <div className="foo" />
      </StaticInput>
    );
    const foo = componentWithChildren.find('.foo');
    assert.equal(foo.length, 0);
  });
});
