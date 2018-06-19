import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { InfoBox } from '../../src';

describe('<InfoBox />', () => {
  it('renders passed in props', () => {
    const wrapper = mount(
      <InfoBox
        id="alpha"
        title="Bravo"
        color="success"
        icon="check"
        className="slick"
      >
        Charlie
      </InfoBox>);

    const wrapperRendered = wrapper.render();

    assert.equal(wrapper.prop('id'), 'alpha');
    assert.equal(wrapper.find('.text-gray-dark').text(), 'Charlie');
    assert.equal(wrapper.find('h1').text(), 'Bravo');
    assert(wrapper.find('Icon').exists());
    assert(wrapperRendered.hasClass('slick'));
    assert(wrapperRendered.hasClass('text-success')); // TODO assumes internal details
  });

  it('does not render header if title not specified', () => {
    const wrapper = mount(<InfoBox icon='check'>Delta</InfoBox>);
    assert.equal(wrapper.find('h1').length, 0);
    assert.equal(wrapper.find('Icon').exists(), false);
  });

  it('does not render icon if not specified', () => {
    const wrapper = mount(<InfoBox title='Foxtrot'>Delta</InfoBox>);
    assert.equal(wrapper.find('Icon').exists(), false);
  });
});

