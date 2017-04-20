/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { EditableNote } from '../../src';
import { mount } from 'enzyme';

describe('<EditableNote />', () => {
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
    assert.equal(note.text, component.ref('text').text());
  });

  it('should call onCancel on click', () => {
    component.ref('cancel').simulate('click');
    assert.equal(onCancel.calledOnce, true);
  });

  it('should call onSave on click', () => {
    component.ref('save').simulate('click');
    assert.equal(onSave.calledOnce, true);
  });

  it('should call onChange on text change', () => {
    component.ref('text').simulate('change', { target: { value: 'Yikes!' } });
    assert.equal(onChange.calledOnce, true);
  });
});
