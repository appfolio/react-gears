import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { ConfirmationButton } from '../../src';

describe('<ConfirmationButton />', () => {
  let map;

  beforeEach(() => {
    map = {};
    sinon.stub(document, 'addEventListener').callsFake((event, cb) => {
      map[event] = cb;
    });
  });

  afterEach(() => {
    document.addEventListener.restore();
  });

  it('should call onClick after two clicks', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <ConfirmationButton confirmation="R U SURE" onClick={onClick}>DESTROY ALL MONSTERS</ConfirmationButton>
    );
    assert.equal(wrapper.text(), 'DESTROY ALL MONSTERS');
    wrapper.simulate('click');
    sinon.assert.notCalled(onClick);
    assert.equal(wrapper.text(), 'R U SURE');
    wrapper.simulate('click');
    sinon.assert.calledOnce(onClick);
    assert.equal(wrapper.text(), 'DESTROY ALL MONSTERS');
  });

  it('should call cancel after click outside', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <ConfirmationButton confirmation="R U SURE" onClick={onClick}>DESTROY ALL MONSTERS</ConfirmationButton>
    );

    const button = wrapper.find(ConfirmationButton);
    button.simulate('click');
    sinon.assert.notCalled(onClick);
    assert.equal(button.text(), 'R U SURE');

    map.mousedown({ target: document });
    assert.equal(button.text(), 'DESTROY ALL MONSTERS');
    sinon.assert.notCalled(onClick);
  });
});
