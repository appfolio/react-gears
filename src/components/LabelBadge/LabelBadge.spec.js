import assert from 'assert';
import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import LabelBadge from './LabelBadge';

describe('<LabelBadge />', () => {
  it('renders passed label', () => {
    const label = mount(<LabelBadge label="User" value="Yep" />).find('strong');
    assert.equal(label.text(), 'User');
  });

  it('does not render a missing label', () => {
    const label = mount(<LabelBadge value="Jingyu" />).find('strong');
    assert.equal(label.length, 0);
  });

  it('renders passed value', () => {
    const valueSpan = mount(<LabelBadge value="Dr Strange" />).find('.label-badge-value');
    assert.equal(valueSpan.text(), 'Dr Strange');
  });

  it('the default prop for removable is true', () => {
    const closeButton = mount(<LabelBadge value="Yep" />).find('.btn-close');
    assert.equal(closeButton.length, 1);
  });

  it('does not render X when removable is false', () => {
    const closeButton = mount(<LabelBadge removable={false} value="Yep" />).find('.btn-close');
    assert.equal(closeButton.length, 0);
  });

  it('renders correct max-width', () => {
    const component = shallow(<LabelBadge label="User" value="Yep" />);
    const label = component.find('strong');
    const value = component.find('.label-badge-value');

    assert.strictEqual(label.prop('style').maxWidth, '14rem');
    assert.strictEqual(value.prop('style').maxWidth, '14rem');
  });

  it('passes classNames to outer span', () => {
    const wrapper = mount(<LabelBadge className="cc" value="Yep" />);
    assert(wrapper.hasClass('cc'));
  });

  describe('on click X', () => {
    it('calls the passed onRemove function', () => {
      const onRemove = sinon.stub();
      const wrapper = mount(<LabelBadge onRemove={onRemove} value="Yep" />);
      wrapper.find('.btn-close').simulate('click');
      sinon.assert.calledWith(onRemove);
    });
  });
});
