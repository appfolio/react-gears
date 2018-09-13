import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { Button, TextCollapseByLength } from '../../src';

describe('<TextCollapseByLength />', () => {
  it('should show whole string without button if string length is smaller than maxLength', () => {
    const component = mount(
      <TextCollapseByLength>Hello World</TextCollapseByLength>
    );
    assert.equal(component.text(), 'Hello World');
  });

  it('should shorten the string and show button if string length is greater than maxLength', () => {
    const component = mount(
      <TextCollapseByLength maxLength={5}>Hello World</TextCollapseByLength>
    );
    assert.equal(component.text(), 'Hello... Show More');
  });

  it('should show whole string and show button if string length is greater than maxLength and default is to show all', () => {
    const component = mount(
      <TextCollapseByLength maxLength={5} collapsedByDefault={false}>Hello World</TextCollapseByLength>
    );
    component.setState({ shouldShowAll: true });
    component.update();
    assert.equal(component.text(), 'Hello World Show Less');
  });

  it('toggle show whole or part of string after clicking button', () => {
    const component = mount(
      <TextCollapseByLength maxLength={5}>Hello World</TextCollapseByLength>
    );
    assert.equal(component.text(), 'Hello... Show More');

    let button = component.find(Button);
    button.simulate('click');
    assert.equal(component.text(), 'Hello World Show Less');

    button = component.find(Button);
    button.simulate('click');
    assert.equal(component.text(), 'Hello... Show More');
  });

  it('should respect overwritten value of showMore', () => {
    const component = mount(
      <TextCollapseByLength maxLength={5} showMore="Gimme more">Hello World</TextCollapseByLength>
    );
    assert.equal(component.text(), 'Hello... Gimme more');
  });

  it('should respect overwritten value of showLess', () => {
    const component = mount(
      <TextCollapseByLength maxLength={5} showLess="Hide it from me">Hello World</TextCollapseByLength>
    );
    let button = component.find(Button);
    button.simulate('click');
    assert.equal(component.text(), 'Hello World Hide it from me');
  });
});
