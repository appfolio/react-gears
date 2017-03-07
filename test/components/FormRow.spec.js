/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input, Label, Col, FormText, FormFeedback } from 'reactstrap';
import FormRow from '../../src/components/FormRow';
import StaticInput from '../../src/components/StaticInput';
import RadioInput from '../../src/components/RadioInput';
import CheckboxInput from '../../src/components/CheckboxInput';
import FileInput from '../../src/components/FileInput';

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
      assert.equal(label.prop('className'), 'text-sm-right');
      assert.equal(label.render().text(), 'First Name');
    });

    it('should wrap the input in a column', () => {
      const col = component.find(Col).at(0);
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

    it('should sync color and state', () => {
      assert.equal(component.prop('color'), '');
      assert.equal(component.find(Input).prop('state'), '');

      component.setProps({ color: 'danger', state: 'warning' });
      assert.equal(component.prop('color'), 'danger');
      assert.equal(component.find(Input).prop('state'), 'danger');

      component.setProps({ color: null });
      assert.equal(component.prop('color'), 'warning');
      assert.equal(component.find(Input).prop('state'), 'warning');
    });

    it('should have an inner column width of 12', () => {
      const col = component.find(Col).at(1); // inner column
      assert.equal(col.prop('xs'), 12);
    });
  });

  describe('when required', () => {
    const component = shallow(
      <FormRow label="First Name" required />
    );

    it('should show a star', () => {
      const label = component.find(Label);
      const star = label.find('span');

      assert.equal(star.hasClass('text-danger'), true);
      assert.equal(star.text(), ' *');
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

    it('should add danger color', () => {
      assert.equal(component.prop('color'), 'danger');
      assert.equal(component.find(Input).prop('state'), 'danger');
    });
  });

  describe('with feedback object for children', () => {
    const feedback = { childField: 'not good' };
    const component = shallow(
      <FormRow label="First Name" feedback={feedback} />
    );

    it('should not be shown', () => {
      assert.equal(component.find(FormFeedback).length, 0);
    });

    it('should not add danger color', () => {
      assert.equal(component.prop('color'), null);
      assert.equal(component.find(Input).prop('state'), null);
    });

    it('should forward feedback to input', () => {
      assert.equal(component.find(Input).prop('error'), feedback);
    });
  });

  describe('with hint', () => {
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

    it('should render a CheckboxInput', () => {
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

  describe('with file type', () => {
    const wrapper = shallow(
      <FormRow type="file" />
    );

    it('should render a FileInput', () => {
      assert.equal(wrapper.find(FileInput).length, 1);
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

  describe('stacked', () => {
    const component = shallow(
      <FormRow label="First Name" stacked />
    );

    it('should have a full-width label', () => {
      const label = component.find(Label);
      assert.equal(label.prop('sm'), 12);
      assert.equal(label.render().text(), 'First Name');
      assert.equal(label.prop('className'), '');
    });

    it('should make input full-width', () => {
      const col = component.find(Col).at(0);
      assert.equal(col.prop('sm'), 12);
    });
  });

  describe('with custom width', () => {
    const component = shallow(
      <FormRow label="First Name" width={{ xs: 6, sm: 7 }} />
    );

    it('should set the inner column width', () => {
      const col = component.find(Col).at(1); // inner column
      assert.equal(col.prop('xs'), 6);
      assert.equal(col.prop('sm'), 7);
    });
  });
});
