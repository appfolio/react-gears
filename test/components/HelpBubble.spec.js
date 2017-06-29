import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import { Icon, HelpBubble } from '../../src';


describe('<HelpBubble />', () => {
  it('should have a question mark', () => {
    const icon = mount(<HelpBubble title="hello" />).find(Icon);
    assert.equal(icon.prop('name'), 'question-circle');
  });

  it('should link popover and icon trigger', () => {
    const component = mount(<HelpBubble title="hi" />);
    assert.equal(
      component.find(Popover).prop('target'),
      component.find(Icon).prop('id')
    );
  });

  it('should start closed', () => {
    const component = mount(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
  });

  it.skip('should open popover when toggled', () => {
    const component = mount(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
    component.find(Icon).simulate('click');
    assert.equal(component.find(Popover).prop('isOpen'), true);
  });

  it('should forward props to Popover', () => {
    const component = mount(<HelpBubble title="hi" placement="bottom" other="stuff" />);
    const popover = component.find(Popover);
    assert.equal(popover.prop('placement'), 'bottom');
    assert.equal(popover.prop('other'), 'stuff');
  });

  it.skip('should place title and content in popover', () => {
    const component = mount(<HelpBubble title="Title">Content</HelpBubble>);
    assert.equal(component.find(PopoverTitle).prop('children'), 'Title');
    assert.equal(component.find(PopoverContent).prop('children'), 'Content');
  });

  it.skip('should accept className', () => {
    const component = mount(<HelpBubble title="Title" className="foo" />);
    console.log('component.debug():', component.debug());
    assert.equal(component.hasClass('foo'), true);
  });
});
