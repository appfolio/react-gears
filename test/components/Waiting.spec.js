import 'jsdom-global/register';

/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { Modal, Waiting } from '../../src';

describe('<Waiting />', () => {
  it('should render a modal', () => {
    const wrapper = mount(<Waiting />);
    const modal = wrapper.find(Modal);

    assert.equal(modal.length, 1);
  });

  it('passes props through to the modal', () => {
    const wrapper = mount(<Waiting isOpen backdrop className="something" />);
    const modal = wrapper.find(Modal);

    assert.equal(true, modal.prop('isOpen'));
    assert.equal(true, modal.prop('backdrop'));
    assert.equal('something', modal.prop('className'));
  });

  it('renders correctly when open', () => {
    mount(<Waiting isOpen />);

    const content = document.getElementsByClassName('modal-dialog')[0];
    assert(content.innerHTML.includes('<h4 class="modal-title">Please Wait</h4>'));
    assert(content.innerHTML.includes('<div class="text-center modal-body"><div class="spinner"><div></div><div></div></div>'));
  });
});
