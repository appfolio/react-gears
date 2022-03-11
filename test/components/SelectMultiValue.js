import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { SelectMultiValue } from '../../src';

describe('<SelectMultiValue />', () => {
  it('renders passed value', () => {
    const component = mount(<SelectMultiValue>User</SelectMultiValue>);
    assert.equal(component.text().trim(), 'User');
  });

  it('passes classNames to outer span', () => {
    const wrapper = mount(<SelectMultiValue className="cc">Yep</SelectMultiValue>);
    assert(wrapper.hasClass('cc'));
  });

  describe('on click X', () => {
    it('calls the passed onRemove function', () => {
      const onRemove = sinon.stub();
      const wrapper = mount(<SelectMultiValue onRemove={onRemove}>Nope</SelectMultiValue>);
      wrapper.find('Icon').simulate('click');
      sinon.assert.calledWith(onRemove);
    });
    it('does not call the passed onRemove function when disabled', () => {
      const onRemove = sinon.stub();
      const wrapper = mount(
        <SelectMultiValue disabled onRemove={onRemove}>
          Maybe
        </SelectMultiValue>
      );
      wrapper.find('Icon').simulate('click');
      sinon.assert.notCalled(onRemove);
    });
  });
});
