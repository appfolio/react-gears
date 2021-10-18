import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import {
  HelpBubble,
  Icon,
  Popover,
  PopoverBody,
  PopoverTitle,
} from '../../src';
import { assertAccessible, assertAccessibleContainer } from '../a11yHelpers';

describe('<HelpBubble />', () => {
  let div: HTMLDivElement;

  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it('should have a question mark', () => {
    const icon = mount(<HelpBubble title="hello" />, { attachTo: div }).find(
      Icon
    );
    assert.equal(icon.prop('name'), 'question-circle');
  });

  it('should link popover and icon trigger', () => {
    const component = mount(<HelpBubble title="hi" />, { attachTo: div });
    assert.equal(
      component.find(Popover).prop('target'),
      component.find(Icon).prop('id')
    );
  });

  it('should start closed', () => {
    const component = mount(<HelpBubble title="hi" />, { attachTo: div });
    assert.equal(component.find(Popover).prop('isOpen'), false);
  });

  it('should open popover when toggled', () => {
    const event = { stopPropagation: sinon.stub() };
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
    component.find('[aria-label="More Info"]').simulate('click', event);
    assert.equal(component.find(Popover).prop('isOpen'), true);
  });

  it('should forward props to Popover', () => {
    const component = mount(
      <HelpBubble title="hi" placement="bottom" other="stuff" />,
      { attachTo: div }
    );
    const popover = component.find(Popover);
    assert.equal(popover.prop('placement'), 'bottom');
    assert.equal(popover.prop('other'), 'stuff');
  });

  it('should place title and content in popover', () => {
    const component = shallow(<HelpBubble title="Title">Content</HelpBubble>);
    assert.equal(component.find(PopoverTitle).prop('children'), 'Title');
    assert.equal(component.find(PopoverBody).prop('children'), 'Content');
  });

  it('should accept className', () => {
    const component = shallow(<HelpBubble title="Title" className="foo" />);
    assert.equal(component.hasClass('foo'), true);
  });

  it('should be closed after you toggle both the icon and the popover', (done) => {
    const event = { stopPropagation: sinon.stub() };
    const component = shallow(<HelpBubble title="hi" />);
    assert.equal(component.find(Popover).prop('isOpen'), false);
    component.find('[aria-label="More Info"]').simulate('click', event);
    assert.equal(component.find(Popover).prop('isOpen'), true);
    component.find(Popover).simulate('toggle');
    component.find('[aria-label="More Info"]').simulate('click', event);
    setTimeout(() => {
      assert.equal(component.find(Popover).prop('isOpen'), false);
      done();
    }, 0);
  });

  describe('accessibility', () => {
    it('has no accessibility issues when closed', async () => {
      await assertAccessible(
        <HelpBubble title="My Title">Help bubble content</HelpBubble>
      );
    });

    it('has no accessibility issues when open', async () => {
      const { container, getByLabelText } = render(
        <HelpBubble title="My Title">Help bubble content</HelpBubble>
      );

      userEvent.click(getByLabelText('More Info'));

      await assertAccessibleContainer(container);
    });
  });
});
