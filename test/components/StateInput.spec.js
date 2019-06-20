import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { StateInput } from '../../src';

describe('<StateInput />', () => {
  it('should default to blank', () => {
    const component = mount(<StateInput />);
    assert.equal(component.find('select').getDOMNode().selectedIndex, 0);
  });

  it('should default to specified stateCode', () => {
    const component = mount(<StateInput defaultValue="AK" />);
    assert.equal(component.find('select').getDOMNode().selectedIndex, 1);
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

describe('options', () => {
  const xxStateValue = 'XX';
  const yyStateValue = 'YY';
  const zzStateValue = 'ZZ';
  const additionalStates = [
    { label: 'The xx', value: xxStateValue },
    { label: 'Yo-yo', value: yyStateValue },
    { label: 'ZZ Top', value: zzStateValue }
  ];
  const component = mount(<StateInput additionalStates={additionalStates} />);

  // it('well-formed additionalStates are available in STATES options', () => {
  //   assert.equal(component.find(`option[value="${xxStateValue}"]`).exists(), true);
  //   assert.equal(component.find(`option[value="${yyStateValue}"]`).exists(), true);
  //   assert.equal(component.find(`option[value="${zzStateValue}"]`).exists(), true);
  // });

  // it('well-formed additionalStates are available in STATES options with value as text', () => {
  //   assert.equal(component.find(`option[value="${xxStateValue}"]`).text(), xxStateValue);
  //   assert.equal(component.find(`option[value="${yyStateValue}"]`).text(), yyStateValue);
  //   assert.equal(component.find(`option[value="${zzStateValue}"]`).text(), zzStateValue);
  // });

  it('well-formed additionalStates are appended in order to the end of STATES options with value as text', () => {
    const length = component.find('option').length;
    assert.equal(component.find('option').last().text(), zzStateValue);
    assert.equal(component.find('option').at(length - 2).text(), yyStateValue);
    assert.equal(component.find('option').at(length - 3).text(), xxStateValue);
  });
});