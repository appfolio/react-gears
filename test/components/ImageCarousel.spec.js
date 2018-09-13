import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import {
  Icon,
  ImageCarousel,
  Modal,
  UncontrolledCarousel
} from '../../src';

describe('<ImageCarousel />', () => {
  it('should render a modal with desired props', () => {
    const component = shallow(<ImageCarousel isOpen />);
    const modal = component.find(Modal);

    assert.strictEqual(modal.prop('backdrop'), true);
    assert.strictEqual(modal.prop('fade'), false);
    assert.strictEqual(modal.prop('isOpen'), true);
  });

  it('should render a close button', () => {
    const component = shallow(<ImageCarousel />);
    const external = shallow(component.prop('external'));
    const icon = external.find(Icon);

    assert.strictEqual(icon.prop('name'), 'times');
  });

  it('should render a carousel', () => {
    const items = [{ src: 'empire' }, { src: 'phantom' }, { src: 'force' }];
    const component = shallow(<ImageCarousel items={items} />);
    const external = shallow(component.prop('external'));
    const carousel = external.find(UncontrolledCarousel);

    assert.deepStrictEqual(carousel.prop('items'), [{ src: 'empire' }, { src: 'phantom' }, { src: 'force' }]);
    assert.strictEqual(carousel.prop('indicators'), true);
    assert.strictEqual(carousel.prop('controls'), true);
    assert.strictEqual(carousel.prop('autoPlay'), false);
    assert.strictEqual(carousel.prop('interval'), 0);
  });

  it('should call toggle when ESC is pressed', () => {
    const spy = sinon.spy();
    shallow(<ImageCarousel toggle={spy} />);

    const event = new KeyboardEvent('keyup', { key: 'Escape' });
    document.dispatchEvent(event);

    assert(spy.calledOnce);
  });

  it('should not call toggle when other keys are pressed', () => {
    const spy = sinon.spy();
    shallow(<ImageCarousel toggle={spy} />);

    const event = new KeyboardEvent('keyup', { key: 'Backspace' });
    document.dispatchEvent(event);

    assert(spy.notCalled);
  });

  describe('close button', () => {
    it('should call toggle on click', () => {
      const spy = sinon.spy();
      const component = shallow(<ImageCarousel toggle={spy} />);
      const external = shallow(component.prop('external'));
      const icon = external.find(Icon);

      icon.simulate('click');

      assert(spy.calledOnce);
    });
  });
});
