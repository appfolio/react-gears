import assert from 'assert';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Alert as AlertComponent } from 'reactstrap';
import { assertAccessible } from '../../tooling/a11yHelpers';
import Icon from '../Icon/Icon';
import Alert from './Alert';

describe('<Alert />', () => {
  describe('default', () => {
    const component = shallow(<Alert />);

    it('should be accessible', async () => {
      await assertAccessible(<Alert />);
    });

    it('should not be dismissible', () => {
      assert.equal(component.prop('toggle'), null);
    });

    it('should have a default color of "warning"', () => {
      assert.equal(component.prop('color'), 'warning');
    });
  });

  describe('with icon', () => {
    it('should show exclamation for warning', () => {
      const icon = shallow(<Alert icon color="warning" />).find(Icon);
      assert.equal(icon.prop('name'), 'exclamation');
    });

    it('should show ban for danger', () => {
      const icon = shallow(<Alert icon color="danger" />).find(Icon);
      assert.equal(icon.prop('name'), 'ban');
    });

    it('should show info for info', () => {
      const icon = shallow(<Alert icon color="info" />).find(Icon);
      assert.equal(icon.prop('name'), 'fa-info');
    });

    it('should show check for success', () => {
      const icon = shallow(<Alert icon color="success" />).find(Icon);
      assert.equal(icon.prop('name'), 'check');
    });

    it('should wrap children with block (for alignment) with icon', () => {
      const component = mount(<Alert icon>Stuff Here</Alert>);
      const wrapper = component.find('div').first();
      assert.strictEqual(wrapper.text(), 'Stuff Here');
    });
  });

  describe('when dismissible', () => {
    it('should be accessible', async () => {
      await assertAccessible(<Alert dismissible />);
    });

    it('should toggle state when clicked', () => {
      const component = mount(<Alert dismissible />);

      assert.equal(component.find(AlertComponent).prop('isOpen'), true);

      component.find(AlertComponent).find('button').simulate('click');
      assert.equal(component.find(AlertComponent).prop('isOpen'), false);
    });

    it('should become visible when receiving new props', () => {
      const component = mount(<Alert dismissible />);
      const inner = component.find(AlertComponent);
      inner.find('button').simulate('click');

      assert.equal(
        component.find(AlertComponent).prop('isOpen'),
        false,
        'inner prop should be false'
      );

      component.setProps({ color: 'danger' });
      component.update();

      assert.strictEqual(
        component.find(AlertComponent).prop('isOpen'),
        true,
        'AlertComponent isOpen prop should be true'
      );
    });

    it('should call onToggle if provided', () => {
      let called = false;
      let calledWith;

      const component = mount(
        <Alert
          dismissible
          onToggle={(value) => {
            called = true;
            calledWith = value;
          }}
        />
      );
      const inner = component.find(AlertComponent);
      inner.find('button').simulate('click');

      assert.equal(called, true, 'callback should be called');
      assert.equal(calledWith, false, 'callback should be called with false');
    });
  });
});
