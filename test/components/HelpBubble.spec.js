import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import {
  Popover,
  PopoverTitle,
  PopoverContent,
  Icon,
  HelpBubble
} from '../../src';

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

  it('should open popover when toggled', () => {
    const event = { stopPropagation: sinon.stub() };
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
    component.find(Icon).simulate('click', event);
    assert.equal(component.find(Popover).prop('isOpen'), true);
  });

  it('should forward props to Popover', () => {
    const component = mount(
      <HelpBubble title="hi" placement="bottom" other="stuff" />
    );
    const popover = component.find(Popover);
    assert.equal(popover.prop('placement'), 'bottom');
    assert.equal(popover.prop('other'), 'stuff');
  });

  it('should place title and content in popover', () => {
    const component = shallow(<HelpBubble title="Title">Content</HelpBubble>);
    assert.equal(component.find(PopoverTitle).prop('children'), 'Title');
    assert.equal(component.find(PopoverContent).prop('children'), 'Content');
  });

  it('should accept className', () => {
    const component = shallow(<HelpBubble title="Title" className="foo" />);
    assert.equal(component.hasClass('foo'), true);
  });

  it('should be closed after you toggle both the icon and the popover', done => {
    const event = { stopPropagation: sinon.stub() };
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
    component.find(Icon).simulate('click', event);
    assert.equal(component.find(Popover).prop('isOpen'), true);
    component.find(Popover).prop('toggle')();
    component.find(Icon).simulate('click', event);
    setTimeout(() => {
      assert.equal(component.find(Popover).prop('isOpen'), false);
      done();
    }, 0);
  });
});
