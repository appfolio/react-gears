import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import TruncatedText from './TruncatedText';

describe('<TruncatedText />', () => {
  it('renders text sucessfully', () => {
    const wrapper = mount(<TruncatedText targetId="target" text="cool text" />);

    const span = wrapper.find('span').first();
    assert.equal(span.exists(), true);
    assert(span.text().includes('cool text'));
  });

  it('truncates text correctly', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(
      <TruncatedText
        targetId="target"
        text="cool text that is over 20 characters long"
        charLimit={20}
      />,
      { attachTo: div }
    );

    const span = wrapper.find('span').first();
    assert.equal(span.exists(), true);
    assert(span.text().includes('cool text that is ov...'));
  });

  it('renders the tooltip with full text', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(
      <TruncatedText
        targetId="target"
        text="cool text that is over 20 characters long"
        charLimit={20}
      />,
      { attachTo: div }
    );

    const tooltip = wrapper.find('Tooltip').first();
    assert.equal(tooltip.exists(), true);
    assert.equal(tooltip.props().children, 'cool text that is over 20 characters long');
  });

  it('renders with no props', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<TruncatedText />, { attachTo: div });

    const span = wrapper.find('span').first();
    assert.equal(span.exists(), true);
    assert.equal(span.text(), '');

    const tooltip = wrapper.find('Tooltip').first();
    assert.equal(tooltip.exists(), false);
  });
});
