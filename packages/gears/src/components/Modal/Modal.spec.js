import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Button from '../Button/Button';
import Modal from './Modal';

const noop = () => {};

describe('<Modal />', () => {
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

  it('should render correctly', () => {
    component = mount(<Modal toggle={noop} />);
    assert(component);
  });

  describe('when autoFocus="true"', () => {
    it('sets focus to the modal content', () => {
      const originalActiveElement = document.activeElement;
      component = mount(
        <Modal isOpen={false} toggle={noop}>
          <Button id="button">This button</Button> should not have focus
        </Modal>
      );

      // After mounting the active element should not have changed
      assert.equal(document.activeElement, originalActiveElement);

      component.setProps({ isOpen: true });

      // Now the modal is open the original focused element should still maintain focus
      const content = document.getElementsByClassName('modal')[0];
      assert.equal(document.activeElement, content);
    });
  });

  describe('when autoFocus="false"', () => {
    it('leaves focus as-is if elements within the modal are not autofocus', () => {
      const originalActiveElement = document.activeElement;
      component = mount(
        <Modal isOpen={false} autoFocus={false} toggle={noop}>
          <Button id="button">This button</Button> should not have focus
        </Modal>
      );

      // After mounting the active element should not have changed
      assert.equal(document.activeElement, originalActiveElement);

      component.setProps({ isOpen: true });

      // Now the modal is open the original focused element should still maintain focus
      assert.equal(document.activeElement, originalActiveElement);
    });

    it('allows elements within the modal to have focus', () => {
      const originalActiveElement = document.activeElement;
      component = mount(
        <Modal isOpen={false} autoFocus={false} toggle={noop}>
          <Button id="button" autoFocus>
            This button
          </Button>{' '}
          should have focus
        </Modal>
      );

      // After mounting the active element should not have changed
      assert.equal(document.activeElement, originalActiveElement);

      component.setProps({ isOpen: true });

      // Now the modal is open the button should have focus
      assert.equal('button', document.activeElement.id);
    });
  });
});
