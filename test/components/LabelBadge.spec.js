/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { LabelBadge } from '../../src';

describe('<LabelBadge />', () => {
  it('renders passed label', () => {
    const label = mount(<LabelBadge label="User" />).find('strong');
    assert.equal(label.text(), 'User');
  });

  it('does not render a missing label', () => {
    const label = mount(<LabelBadge value="Jingyu" />).find('strong');
    assert.equal(label.length, 0);
  });

  it('renders passed value', () => {
    const valueSpan = mount(<LabelBadge value={'Dr Strange'} />).find('.label-badge-value');
    assert.equal(valueSpan.text(), 'Dr Strange');
  });

  it('the default prop for removable is true', () => {
    const closeButton = mount(<LabelBadge />).find('.close');
    assert.equal(closeButton.length, 1);
  });

  it('does not render X when removable is false', () => {
    const closeButton = mount(<LabelBadge removable={false} />).find('.close');
    assert.equal(closeButton.length, 0);
  });

  it('renders correct max-width');

  context('on click X', () => {
    it('calls the passed onRemove function', () => {
      const onRemove = sinon.stub();
      const wrapper = mount(<LabelBadge onRemove={onRemove} />);
      wrapper.find('.close').simulate('click');
      sinon.assert.calledWith(onRemove);
    });
  });
});
