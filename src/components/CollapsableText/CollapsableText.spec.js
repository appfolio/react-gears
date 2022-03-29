import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Button from '../Button/Button';
import CollapsableText from './CollapsableText';

describe('<CollapsableText />', () => {
  it('should show whole string without button if string length is smaller than maxLength', () => {
    const component = mount(<CollapsableText>Hello World</CollapsableText>);
    assert.equal(component.text(), 'Hello World');
  });

  it('should shorten the string and show button if string length is greater than maxLength', () => {
    const component = mount(<CollapsableText maxLength={5}>Hello World</CollapsableText>);
    assert.equal(component.text(), 'Hello… Show More');
  });

  it('should show whole string and show button if string length is greater than maxLength and default is to show all', () => {
    const component = mount(
      <CollapsableText maxLength={5} collapsed={false}>
        Hello World
      </CollapsableText>
    );
    assert.equal(component.text(), 'Hello World Show Less');
  });

  it('toggle show whole or part of string after clicking button', () => {
    const component = mount(<CollapsableText maxLength={5}>Hello World</CollapsableText>);
    assert.equal(component.text(), 'Hello… Show More');

    let button = component.find(Button);
    button.simulate('click');
    assert.equal(component.text(), 'Hello World Show Less');

    button = component.find(Button);
    button.simulate('click');
    assert.equal(component.text(), 'Hello… Show More');
  });

  it('should toggle after prop change', () => {
    const component = mount(<CollapsableText maxLength={5}>Hello World</CollapsableText>);
    assert.equal(component.text(), 'Hello… Show More');

    component.setProps({ collapsed: false });
    component.update();
    assert.equal(component.text(), 'Hello World Show Less');

    component.setProps({ collapsed: true });
    component.update();
    assert.equal(component.text(), 'Hello… Show More');
  });

  it('should respect overwritten value of moreLabel', () => {
    const component = mount(
      <CollapsableText maxLength={5} moreLabel="Gimme more">
        Hello World
      </CollapsableText>
    );
    assert.equal(component.text(), 'Hello… Gimme more');
  });

  it('should respect overwritten value of lessLabel', () => {
    const component = mount(
      <CollapsableText maxLength={5} lessLabel="Hide it from me">
        Hello World
      </CollapsableText>
    );
    const button = component.find(Button);
    button.simulate('click');
    assert.equal(component.text(), 'Hello World Hide it from me');
  });
});
