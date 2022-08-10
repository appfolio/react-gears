import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import ClickableContainer from './ClickableContainer';

describe('<ClickableContainer />', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call onClick on Enter key presses', () => {
    const onClick = sinon.spy();
    const component = mount(<ClickableContainer onClick={onClick} />);
    component.simulate('keypress', { key: 'Enter' });
    assert(onClick.calledOnce);
  });

  it('should call onClick on Spacebar key presses', () => {
    const onClick = sinon.spy();
    const component = mount(<ClickableContainer onClick={onClick} />);
    component.simulate('keypress', { key: ' ' });
    assert(onClick.calledOnce);
  });

  it('should call onClick on click', () => {
    const onClick = sinon.spy();
    const component = mount(<ClickableContainer onClick={onClick} />);
    component.simulate('click');
    assert(onClick.calledOnce);
  });

  it('should render any tag', () => {
    const onClick = sinon.spy();
    const component = mount(<ClickableContainer tag="header" onClick={onClick} />);
    const header = component.find('header');
    assert.equal(header.length, 1);
  });

  it('should accept string or function as tag', () => {
    const onClick = () => true;

    assert.doesNotThrow(() => {
      mount(<ClickableContainer tag="div" onClick={onClick} />);
      mount(<ClickableContainer tag={() => <div />} onClick={onClick} />);
    });
  });
});
