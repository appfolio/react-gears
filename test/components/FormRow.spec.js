/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input, Label, Col, FormText, FormFeedback } from 'reactstrap';
import FormRow from '../../src/components/FormRow';
import StaticInput from '../../src/components/StaticInput';
import RadioInput from '../../src/components/RadioInput';
import CheckboxInput from '../../src/components/CheckboxInput';

describe('<FormRow />', () => {
  describe('by default', () => {
    const component = shallow(
      <FormRow label="First Name" id="someID" size="sm"/>
    );

    it('should create a label', () => {
      const label = component.find(Label);
      assert.equal(label.length, 1);
      assert.equal(label.prop('for'), 'someID');
      assert.equal(label.prop('size'), 'sm');
      assert.equal(label.prop('sm'), 3);
      assert.equal(label.render().text(), 'First Name');
    });

    it('should wrap the input in a column', () => {
      const col = component.find(Col);
      assert.equal(col.length, 1);
      assert.equal(col.prop('sm'), 9);
    });

    it('should have an Input', () => {
      const input = component.find(Input);
      assert.equal(input.length, 1);
      assert.equal(input.prop('id'), 'someID');
      assert.equal(input.prop('size'), 'sm');
      assert.equal(input.prop('type'), 'text');
    });

    it('should not have feedback or hint', () => {
      assert.equal(component.find(FormText).length, 0);
      assert.equal(component.find(FormFeedback).length, 0);
    });
  });

  describe('when required', () => {
    const component = shallow(
      <FormRow label="First Name" required />
    );

    it('should show a star', () => {
      const label = component.find(Label);
      assert.equal(label.render().text(), 'First Name *');
      assert.equal(label.find('span').hasClass('text-danger'), true);
    });
  });

  describe('with feedback', () => {
    const component = shallow(
      <FormRow label="First Name" feedback="feedback" />
    );

    it('should be shown', () => {
      const feedback = component.find(FormFeedback);
      assert.equal(feedback.prop('children'), 'feedback');
    });
  });

  describe('with feedback', () => {
    const component = shallow(
      <FormRow label="First Name" hint="hint" />
    );

    it('should be shown', () => {
      const hint = component.find(FormText);
      assert.equal(hint.prop('children'), 'hint');
    });
  });

  describe('with static type', () => {
    const component = shallow(
      <FormRow label="First Name" type="static" />
    );

    it('should render a StaticInput', () => {
      const input = component.find(StaticInput);
      assert.equal(input.length, 1);
    });
  });

  describe('with checkbox type', () => {
    const component = shallow(
      <FormRow label="First Name" type="checkbox" />
    );

    it('should render a CheckbocInput', () => {
      assert.equal(component.find(CheckboxInput).length, 1);
    });
  });

  describe('with radio type', () => {
    const component = shallow(
      <FormRow label="First Name" type="radio" />
    );

    it('should render a RadioInput', () => {
      assert.equal(component.find(RadioInput).length, 1);
    });
  });

  describe('with custom type', () => {
    const Custom = () => (<div>Hi</div>);
    const component = shallow(
      <FormRow label="First Name" type={Custom} />
    );

    it('should render custom input', () => {
      assert.equal(component.find(Custom).length, 1);
    });
  });
});
