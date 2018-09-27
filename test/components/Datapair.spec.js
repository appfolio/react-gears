import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import { Datapair, FormLabelGroup, Input } from '../../src';

describe('<Datapair />', () => {
  const component = shallow(<Datapair label="stuff" value="something" />);

  it('should have a FormLabelGroup', () => {
    const formLabelGroup = component.find(FormLabelGroup);
    assert.equal(formLabelGroup.length, 1);
    assert.equal(formLabelGroup.prop('label'), 'stuff');

    const input = formLabelGroup.find(Input);
    assert.equal(input.children().text(), 'something');
  });

  it('should support html in label', () => {
    const fancyComponent = shallow(<Datapair label={<span>stuff</span>} value="something" />);
    const formLabelGroup = fancyComponent.find(FormLabelGroup);
    assert.equal(shallow(formLabelGroup.prop('label')).html(), '<span>stuff</span>');
  });

  it('should support html in value', () => {
    const fancyComponent = shallow(<Datapair label="stuff" value={<span>Special</span>} />);
    const formLabelGroup = fancyComponent.find(FormLabelGroup);
    const input = formLabelGroup.find(Input);
    assert.equal(input.children().html(), '<span>Special</span>');
  });

  it('should support children', () => {
    const fancyComponent = shallow(<Datapair label="stuff"><span>Special</span></Datapair>);
    const formLabelGroup = fancyComponent.find(FormLabelGroup);
    assert.equal(formLabelGroup.children().html(), '<span>Special</span>');
  });

  it('should support a className', () => {
    const fancyComponent = shallow(<Datapair className="fancy-component" label="stuff" />);
    const formLabelGroup = fancyComponent.find(FormLabelGroup);
    assert.equal(formLabelGroup.prop('rowClassName'), 'mb-1 fancy-component');
  });

  it('should omit undefined class name', () => {
    const fancyComponent = shallow(<Datapair label="stuff" />);
    const formLabelGroup = fancyComponent.find(FormLabelGroup);
    assert.equal(formLabelGroup.prop('rowClassName'), 'mb-1');
  });
});
