import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { TooltipButton, Tooltip, Button } from '../../src';

describe('<TooltipButton />', () => {
  describe('with initial props', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = mount(<TooltipButton tooltip='a tooltip' >Hello World</TooltipButton>, { attachTo: div });

    it('should forward props', () => {
      const TooltipComponent = component.find(Tooltip);
      const ButtonComponent = component.find(Button);

      assert.equal(TooltipComponent.prop('children'), 'a tooltip');
      assert.equal(TooltipComponent.prop('placement'), 'top');
      assert.equal(ButtonComponent.prop('children'), 'Hello World');
      assert.equal(ButtonComponent.prop('disabled'), false);
    });
  });
});
