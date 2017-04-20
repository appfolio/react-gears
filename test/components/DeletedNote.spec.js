/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { DeletedNote } from '../../src';
import { mount } from 'enzyme';

describe('<DeletedNote />', () => {
  const note = {
    text: 'Hello World!'
  };
  const onUndelete = sinon.spy();
  const component = mount(
    <DeletedNote
      note={note}
      onUndelete={onUndelete}
    />);

  it('should render correctly', () => {
    assert(component);
  });

  it('should call onUndelete on click', () => {
    component.ref('undo').simulate('click');
    assert.equal(onUndelete.calledOnce, true);
  });
});
