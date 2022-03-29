import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import Waiting from './Waiting';

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
    assert.equal('Please Wait', wrapper.find('header').text());
  });

  it('uses passed in children', () => {
    const wrapper = mount(
      <Waiting isOpen backdrop>
        <div id="yo">YO...</div>
      </Waiting>
    );
    assert.equal(false, wrapper.find(Spinner).exists());
  });

  it('renders correctly when open', () => {
    mount(<Waiting isOpen />);

    assert(document.getElementsByClassName('modal-dialog')[0]);
  });
});
