import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { StateInput } from '../../src';

describe('<StateInput />', () => {
  it('should default to blank', () => {
    const component = mount(<StateInput />);
    assert.equal(component.find('select').node.selectedIndex, 0);
  });

  it('should default to specified countryCode', () => {
    const component = mount(<StateInput defaultValue="AL" />);
    assert.equal(component.find('select').node.selectedIndex, 1);
  });

  it('should call onChange when new selection picked', () => {
    const callback = sinon.spy();
    const component = mount(<StateInput onChange={callback} />);
    component.find('select').simulate('change', { target: { value: 'VI' } });
    sinon.assert.calledWith(callback, 'VI');
  });

  it('should be disabled when specified', () => {
    const component = mount(<StateInput disabled />);
    assert.equal(component.find('select').props().disabled, true);
  });

  it('should render specified id', () => {
    const component = mount(<StateInput id="yowza" />);
    assert.equal(component.find('#yowza').exists(), true);
  });

  it('should render specified classNames', () => {
    const component = mount(<StateInput className="boogie" />);
    assert.equal(component.find('.boogie').exists(), true);
  });

  it('should render specified name', () => {
    const component = mount(<StateInput name="fred" />);
    assert.equal(component.find('[name="fred"]').exists(), true);
  });

  it('should render specified placeholder', () => {
    const component = mount(<StateInput placeholder="Pick a State..." />);
    assert.equal(component.find('option').first().text(), 'Pick a State...');
  });
});
