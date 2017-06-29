import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Tooltip } from '../../src';

describe('<Tooltip />', () => {
  describe('by default', () => {
    const component = shallow(<Tooltip placement="right" children="Hello World" target="foo" />);

    it('should be closed', () => {
      assert.equal(component.prop('isOpen'), false);
      assert.equal(component.state('isOpen'), false);
    });

    it('should forward props', () => {
      assert.equal(component.prop('placement'), 'right');
    });

    it('should toggle state', () => {
      component.prop('toggle')();
      assert.equal(component.prop('isOpen'), true);
      assert.equal(component.state('isOpen'), true);
    });
  });

  describe('with initial props', () => {
    const component = shallow(<Tooltip isOpen children="Hello World" target="foo" />);

    it('should seed state', () => {
      assert.equal(component.prop('isOpen'), true);
      assert.equal(component.state('isOpen'), true);
    });
  });
});
