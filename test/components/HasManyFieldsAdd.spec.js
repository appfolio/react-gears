import assert from 'assert';

import { shallow } from 'enzyme';
import React from 'react';
import { Button } from 'reactstrap';

import { HasManyFieldsAdd, Icon } from '../../src';

describe('<HasManyFieldsAdd />', () => {
  const component = shallow(
    <HasManyFieldsAdd
      outline={false}
      color="danger"
      className="foo"
      random="prop"
    >
      Custom Label!
    </HasManyFieldsAdd>
  );

  it('should ignore outline and color props', () => {
    assert.equal(component.prop('outline'), true);
    assert.equal(component.prop('color'), 'success');
  });

  it('should merge classNames', () => {
    assert.equal(component.prop('className'), 'w-100 rounded-0 foo');
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
    assert.equal(disabledComponent.prop('color'), 'secondary');
  });
});
