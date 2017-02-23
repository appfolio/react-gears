import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import LabelBadge from '../../src/components/LabelBadge';

describe('<LabelBadge />', () => {
  it('its default prop for dismissible is true', () => {
    const closeButton = mount(<LabelBadge />).find('.js-close-button');
    assert.equal(closeButton.length, 1);
  });

  it('doesnt render X when dismissible is false', () => {
    const closeButton = mount(<LabelBadge dismissible={false} />).find('.js-close-button');
    assert.equal(closeButton.length, 0);
  });

  it('renders passed label', () => {
    const label = mount(<LabelBadge label={'user'} />).find('.js-label-badge-label');
    assert.equal(label.text(), 'user:');
  });

  it('renders passed value', () => {
    const valueSpan = mount(<LabelBadge value={'Dr Strange'} />).find('.js-label-badge-value');
    assert.equal(valueSpan.text(), 'Dr Strange×');
  });

  context('on click X', () => {
    it('calls the passed onClear function', () => {
      const onClear = sinon.stub();
      const wrapper = mount(<LabelBadge onClear={onClear} />);
      wrapper.find('.js-close-button').simulate('click');
      sinon.assert.calledWith(onClear);
    });
  });
});
