import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CountryInput } from '../../src';

describe('<CountryInput />', () => {
  it('should default to blank', () => {
    const component = mount(<CountryInput />);
    assert.equal(component.find('select').node.selectedIndex, 0);
  });

  it('should default to specified countryCode', () => {
    const component = mount(<CountryInput defaultValue="US" />);
    assert.equal(component.find('select').node.selectedIndex, 1);
  });

  it('should call onChange when new selection picked', () => {
    const callback = sinon.spy();
    const component = mount(<CountryInput onChange={callback} />);
    component.find('select').simulate('change', { target: { value: 'VN' } });
    sinon.assert.calledWith(callback, 'VN');
  });

  it('should be disabled when specified', () => {
    const component = mount(<CountryInput disabled />);
    assert.equal(component.find('select').props().disabled, true);
  });

  it('should render specified id', () => {
    const component = mount(<CountryInput id="yowza" />);
    assert.equal(component.find('#yowza').exists(), true);
  });

  it('should render specified classNames', () => {
    const component = mount(<CountryInput className="boogie" />);
    assert.equal(component.find('.boogie').exists(), true);
  });

  it('should render specified name', () => {
    const component = mount(<CountryInput name="fred" />);
    assert.equal(component.find('[name="fred"]').exists(), true);
  });

  it('should render specified placeholder', () => {
    const component = mount(<CountryInput placeholder="Pick a Country..." />);
    assert.equal(component.find('option').first().text(), 'Pick a Country...');
  });
});
