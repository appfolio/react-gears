import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { TooltipButton, Tooltip, Button } from '../../src';

describe('<TooltipButton />', () => {
  describe('with initial props', () => {
    const onClick = sinon.spy();
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = mount(
      <TooltipButton tooltip="a tooltip" onClick={onClick}>
        Hello World
      </TooltipButton>,
      { attachTo: div }
    );

    it('should forward props', () => {
      const TooltipComponent = component.find(Tooltip);
      const ButtonComponent = component.find(Button);

      assert.equal(TooltipComponent.prop('children'), 'a tooltip');
      assert.equal(TooltipComponent.prop('placement'), 'top');
      assert.equal(ButtonComponent.prop('children'), 'Hello World');
      assert.equal(ButtonComponent.prop('disabled'), false);
    });

    it('should not have a tabbable wrapper div by default', () => {
      const buttonDiv = component.find('div');
      assert.equal(buttonDiv.prop('tabIndex'), -1);
    });

    it('should trigger onClick when enabled', () => {
      const ButtonComponent = component.find(Button);

      ButtonComponent.simulate('click');
      sinon.assert.calledOnce(onClick);
    });

    it('should not trigger onClick when disabled', () => {
      const div2 = document.createElement('div');
      document.body.appendChild(div2);
      const dontCall = sinon.spy();
      const wrapper = mount(
        <TooltipButton disabled tooltip="Yowza" onClick={dontCall}>
          Hello World
        </TooltipButton>,
        { attachTo: div2 }
      );
      const TooltipComponent = wrapper.find(Tooltip);
      const ButtonComponent = component.find(Button);

      const buttonDiv = wrapper.find('div');
      assert.equal(buttonDiv.prop('tabIndex'), 0);
      assert(TooltipComponent.exists());
      ButtonComponent.simulate('click');
      sinon.assert.notCalled(dontCall);
    });

    it('should have no Tooltip if tooltip not specified', () => {
      const div2 = document.createElement('div');
      document.body.appendChild(div2);
      const callMe = sinon.spy();
      const wrapper = mount(
        <TooltipButton onClick={callMe}>
          Hello World
        </TooltipButton>,
        { attachTo: div2 }
      );
      const TooltipComponent = wrapper.find(Tooltip);
      const ButtonComponent = wrapper.find(Button);

      assert.equal(TooltipComponent.exists(), false);
      ButtonComponent.simulate('click');
      sinon.assert.calledOnce(callMe);
    });
  });
});
