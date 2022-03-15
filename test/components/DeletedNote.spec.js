import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { Button, DeletedNote } from '../../src';

describe('<DeletedNote />', () => {
  const note = {
    text: 'Hello World!',
  };
  const onUndelete = sinon.spy();
  const component = mount(<DeletedNote note={note} onUndelete={onUndelete} />);

  it('should render correctly', () => {
    assert(component);
  });

  it('should call onUndelete on click', () => {
    component.find(Button).simulate('click');
    assert.equal(onUndelete.calledOnce, true);
  });
});
