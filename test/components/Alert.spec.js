import 'jsdom-global/register';

/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { Icon } from '../../src/';

import Alert from '../../src/components/Alert';

describe('<Alert />', () => {
  it('should not be dismissible', () => {
    const component = mount(<Alert />);
    assert.equal(component.prop('toggle'), null);
  });

  it('should have a default color of "warning"', () => {
    const component = mount(<Alert />);
    assert.equal(component.prop('color'), 'warning');
  });

  describe('with icon', () => {
    it('should show bullhorn for warning', () => {
      const icon = mount(<Alert icon color="warning" />).find(Icon);
      assert.equal(icon.prop('name'), 'bullhorn');
    });

    it('should show ban for danger', () => {
      const icon = mount(<Alert icon color="danger" />).find(Icon);
      assert.equal(icon.prop('name'), 'ban-circle');
    });

    it('should show info for info', () => {
      const icon = mount(<Alert icon color="info" />).find(Icon);
      assert.equal(icon.prop('name'), 'info-sign');
    });

    it('should show check for success', () => {
      const icon = mount(<Alert icon color="success" />).find(Icon);
      assert.equal(icon.prop('name'), 'ok');
    });

    it('should wrap children with block (for alignment) with icon', () => {
      const component = mount(<Alert icon>Stuff Here</Alert>);
      const wrapper = component.children().find('div');
      assert.equal(wrapper.length, 1);
      assert.deepEqual(wrapper.prop('style'), { overflow: 'hidden' });
      assert.equal(wrapper.text(), 'Stuff Here');
    });
  });

  describe.skip('when dismissible', () => {
    it('should toggle state when clicked', () => {
      const component = mount(<Alert dismissible />);
      assert.equal(component.state('visible'), true);
      assert.equal(component.prop('isOpen'), true);
      component.instance().toggle();
      component.update();
      assert.equal(component.state('visible'), false);
      assert.equal(component.prop('isOpen'), false);
    });

    it('should pass toggle function', () => {
      const component = mount(<Alert dismissible />);
      assert.equal(component.prop('toggle'), component.instance().toggle);
    });
  });
});
