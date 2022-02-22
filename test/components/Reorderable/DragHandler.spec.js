import React from 'react';
import { mount } from 'enzyme';
import assert from 'assert';
import withDragHandler from '../../../src/components/Reorderable/DragHandler';
import Icon from '../../../src/components/Icon';

describe('#withDragHandler', () => {
  describe('using default handler UI', () => {
    it('renders a bar', () => {
      const Handler = withDragHandler();
      const wrapper = mount(<Handler />);
      const icon = wrapper.find(Icon);

      assert(icon.exists());
    });
  });

  describe('not using default handler UI', () => {
    it('renders the passed in component', () => {
      const wrappedHandler = () => <span className="js-handler">::</span>;
      const Handler = withDragHandler(wrappedHandler, false);
      const wrapper = mount(<Handler />);

      assert.equal(wrapper.length, 1);
      assert.equal(wrapper.find('.js-handler').length, 1);
    });
  });
});
