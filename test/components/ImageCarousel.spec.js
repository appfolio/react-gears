import assert from 'assert';
import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import {
  Icon,
  ImageCarousel,
  Modal,
  UncontrolledCarousel
} from '../../src';

describe('<ImageCarousel />', () => {
  let component;
  afterEach((done) => {
    if (component && component.prop('isOpen')) {
      component.setProps({ isOpen: false });
      const interval = setInterval(() => {
        if (!document.getElementsByClassName('modal').length) {
          clearInterval(interval);
          component = null;
          done();
        }
      }, 100);
    } else {
      done();
    }
  });

  it('should render a modal with desired props', () => {
    component = shallow(<ImageCarousel isOpen />);
    const modal = component.find(Modal);

    assert.strictEqual(modal.prop('backdrop'), true);
    assert.strictEqual(modal.prop('fade'), false);
    assert.strictEqual(modal.prop('isOpen'), true);
  });

  it('should render a close button', () => {
    component = shallow(<ImageCarousel />);
    const external = shallow(component.prop('external'));
    const icon = external.find(Icon);

    assert.strictEqual(icon.prop('name'), 'times');
  });

  it('should render a carousel', () => {
    const items = [{ src: 'empire' }, { src: 'phantom' }, { src: 'force' }];
    component = shallow(<ImageCarousel items={items} />);
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
      component = shallow(<ImageCarousel toggle={spy} />);
      const external = shallow(component.prop('external'));
      const icon = external.find(Icon);

      icon.simulate('click');

      assert(spy.calledOnce);
    });
  });

  it('should render with correct index', () => {
    const items = [{ src: 'empire' }, { src: 'phantom' }, { src: 'force' }];
    component = mount(<ImageCarousel items={items} index={2} isOpen />);
    const carousel = component.find(UncontrolledCarousel);
    assert.equal(carousel.state('activeIndex'), 2);
  });

  it('should render with correct with no index and then go to the appropriate index', () => {
    const items = [{ src: 'empire' }, { src: 'phantom' }, { src: 'force' }];
    component = mount(<ImageCarousel items={items} isOpen />);
    let carousel = component.find(UncontrolledCarousel);

    component.setProps({ index: 1 });
    component.update();
    carousel = component.find(UncontrolledCarousel);
    assert.equal(carousel.state('activeIndex'), 1);
  });
});
