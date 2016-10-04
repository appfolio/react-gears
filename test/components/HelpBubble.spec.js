/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import Icon from 'react-fontawesome';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';

import HelpBubble from '../../src/components/HelpBubble';

describe('<HelpBubble />', () => {
  it('should have a question mark', () => {
    const icon = shallow(<HelpBubble title="hello"/>).find(Icon);
    assert.equal(icon.prop('name'), 'question-circle');
  });

  it('should link popover and icon trigger', () => {
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.instance().id, 'help-bubble-1');
    assert.equal(
      component.find(Popover).prop('target'),
      component.find(Icon).prop('id')
    );
  });

  it('should start closed', () => {
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
  });

  it('should open popover when toggled', () => {
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
    component.find(Icon).simulate('click');
    assert.equal(component.find(Popover).prop('isOpen'), true);
  });

  it('should forward props to Popover', () => {
    const component = shallow(<HelpBubble title="hi" placement="bottom" other="stuff"/>)
        , popover = component.find(Popover);
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
});
