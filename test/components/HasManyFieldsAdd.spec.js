import assert from 'assert';

import { shallow } from 'enzyme';
import React from 'react';

import { Button, HasManyFieldsAdd, Icon } from '../../src';

describe('<HasManyFieldsAdd />', () => {
  const component = shallow(
    <HasManyFieldsAdd
      outline
      color="danger"
      className="foobar"
      random="prop"
    >
      Custom Label!
    </HasManyFieldsAdd>
  );

  it('should merge classNames', () => {
    assert(component.prop('className').indexOf('foobar') >= 0);
  });

  it('should forward props', () =>
    assert.equal(component.prop('random'), 'prop'));

  it('should be a button', () => assert.equal(component.type(), Button));

  it('should have customizable text', () =>
    assert.equal(component.find('span').text(), 'Custom Label!'));

  it('should have an icon', () => {
    const icon = component.find(Icon);
    assert.equal(icon.prop('name'), 'plus-circle');
  });

  it('should be a disabled button when disabled', () => {
    const disabledComponent = shallow(
      <HasManyFieldsAdd
        outline={false}
        color="danger"
        className="foo"
        random="prop"
        disabled
      >
        Custom Label!
      </HasManyFieldsAdd>
    );

    assert.equal(disabledComponent.prop('disabled'), true);
  });
});
