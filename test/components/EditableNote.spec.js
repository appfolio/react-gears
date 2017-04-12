/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { EditableNote } from '../../src';
import { mount } from 'enzyme';

describe.only('<EditableNote />', () => {
  const note = {
    text: 'Hello World!'
  };
  const onCancel = sinon.spy();
  const onChange = sinon.spy();
  const onSave = sinon.spy();
  const component = mount(
    <EditableNote
      note={note}
      onCancel={onCancel}
      onChange={onChange}
      onSave={onSave}
    />);

  it('should render correctly', () => {
    assert(component);
  });

  it('should call onCancel on click', () => {
    component.refs('cancel').simulate('click');
  });

  // TODO
});
