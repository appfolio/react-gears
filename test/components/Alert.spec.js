import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import Inner from 'reactstrap/lib/Alert';

import { Icon, Alert } from '../../src';

describe('<Alert />', () => {
  describe('default', () => {
    const component = shallow(<Alert />);

    it('should not be dismissible', () => {
      assert.equal(component.prop('toggle'), null);
    });

    it('should have a default color of "warning"', () => {
      assert.equal(component.prop('color'), 'warning');
    });
  });

  describe('with icon', () => {
    it('should show exclamation-circle for warning', () => {
      const icon = shallow(<Alert icon color="warning" />).find(Icon);
      assert.equal(icon.prop('name'), 'exclamation-circle');
    });

    it('should show ban for danger', () => {
      const icon = shallow(<Alert icon color="danger" />).find(Icon);
      assert.equal(icon.prop('name'), 'ban');
    });

    it('should show info for info', () => {
      const icon = shallow(<Alert icon color="info" />).find(Icon);
      assert.equal(icon.prop('name'), 'info-circle');
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
    it('should toggle state when clicked', () => {
      const component = mount(<Alert dismissible />);
      assert.equal(component.state('visible'), true);

      assert.equal(component.find(Inner).prop('isOpen'), true);

      component
        .find(Inner)
        .find('button')
        .simulate('click');
      assert.equal(component.state('visible'), false);
      assert.equal(component.find(Inner).prop('isOpen'), false);
    });

    it('should become visible when receiving new props', () => {
      const component = mount(<Alert dismissible />);
      const inner = component.find(Inner);
      inner.find('button').simulate('click');
      assert.equal(component.state('visible'), false);

      component.setProps({ color: 'danger' });
      assert.equal(component.state('visible'), true);
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
      const inner = component.find(Inner);
      inner.find('button').simulate('click');

      assert.equal(called, true);
      assert.equal(calledWith, false);
    });
  });
});
