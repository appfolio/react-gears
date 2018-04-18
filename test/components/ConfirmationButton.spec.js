import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { ConfirmationButton } from '../../src';

describe('<ConfirmationButton />', () => {
  it('should call onClick after two clicks', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <ConfirmationButton confirmation="R U SURE" onClick={onClick}>
        DESTROY ALL MONSTERS
      </ConfirmationButton>
    );
    assert.equal(wrapper.text(), 'DESTROY ALL MONSTERS');
    wrapper.simulate('click');
    assert.equal(onClick.calledOnce, false);
    assert.equal(wrapper.text(), 'R U SURE');
    wrapper.simulate('click');
    assert.equal(onClick.calledOnce, true);
    assert.equal(wrapper.text(), 'DESTROY ALL MONSTERS');
  });

  it('should call cancel after click outside')
  // TODO test does not work in enzyme/jsdom:
  // const onClick = sinon.spy();
  // const wrapper = mount(
  //   <div>
  //     <span>Whatev</span>
  //     <ConfirmationButton confirmation="R U SURE" onClick={onClick}>
  //       DESTROY ALL MONSTERS
  //     </ConfirmationButton>
  //   </div>
  // );
  // const button = wrapper.find(ConfirmationButton);
  // const outside = wrapper.find('span');
  // button.simulate('click');
  // assert.equal(onClick.calledOnce, false);
  // assert.equal(button.text(), 'R U SURE');
  // outside.simulate('click');
  // assert.equal(button.text(), 'DESTROY ALL MONSTERS');
  // assert.equal(onClick.calledOnce, false);
});
