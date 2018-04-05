import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import {
  Col,
  FormFeedback,
  FormGroup,
  FormLabelGroup,
  FormText,
  Label,
} from '../../src';

describe.only('<FormLabelGroup />', () => {
  describe('by default', () => {
    const component = shallow(<FormLabelGroup>Hello World</FormLabelGroup>);

    it('should not have a label', () => {
      const label = component.find(Label);
      assert.equal(label.length, 0);
    });

    it('should have an outer column for the row where the children are rendered', () => {
      const col = component.find(Col).at(0);
      assert.equal(col.prop('sm'), 9);
    });

    it('should have an inner column wrapping the children', () => {
      const col = component.find(Col).at(1);
      assert.equal(col.prop('xs'), 12);
      assert.equal(col.children().text(), 'Hello World');
    });

    it('should not have a hint', () => {
      const hint = component.find(FormText);
      assert.equal(hint.length, 0);
    });

    it('should not have feedback', () => {
      const feedback = component.find(FormFeedback);
      assert.equal(feedback.length, 0);
    });
  });

  describe('with a label', () => {
    let props;

    beforeEach(() => {
      props = {
        label: 'First Name',
        inputId: 'someID',
        size: 'sm',
      };
    });

    it('should have a label', () => {
      const component = shallow(<FormLabelGroup {...props}>Hello World</FormLabelGroup>);

      const label = component.find(Label);
      assert.equal(label.length, 1);
      assert.equal(label.prop('for'), 'someID');
      assert.equal(label.prop('sm'), 3);
      assert.equal(label.prop('size'), 'sm');
      assert.equal(label.prop('className'), 'text-sm-right');
      assert.equal(label.children().text(), 'First Name');
    });

    it('should include an asterisk after the label text when required', () => {
      const component = shallow(<FormLabelGroup {...props} required>Hello World</FormLabelGroup>);

      const label = component.find(Label);
      assert.equal(label.length, 1);
      const labelChildren = label.children();
      assert.equal(labelChildren.at(0).text(), 'First Name');
      assert.equal(labelChildren.at(1).text(), ' *');
      assert.equal(labelChildren.at(1).prop('className'), 'text-danger');
    });
  });

  describe('with a node label', () => {
    const component = shallow(<FormLabelGroup label={<span>Greetings</span>}>Hello World</FormLabelGroup>);

    it('should have a node label', () => {
      const label = component.find(Label);
      assert.equal(label.render().text(), 'Greetings');
    });
  });

  describe('with rowClassName', () => {
    const component = shallow(<FormLabelGroup rowClassName="classy">Hello World</FormLabelGroup>);

    it('uses rowClassName as the className for the FormGroup', () => {
      const formGroup = component.find(FormGroup);
      assert.equal(formGroup.length, 1);
      assert.equal(formGroup.prop('className'), 'classy');
    });
  });

  describe('with color', () => {
    const component = shallow(<FormLabelGroup color="success">Hello World</FormLabelGroup>);

    it('should use the color prop to set the color of the FormGroup', () => {
      const formGroup = component.find(FormGroup);
      assert.equal(formGroup.length, 1);
      assert.equal(formGroup.prop('color'), 'success');
    });
  });

  describe('stacked', () => {
    const component = shallow(<FormLabelGroup label="First Name" stacked>Hello World</FormLabelGroup>);

    it('should have a width 12 outer column for the row where the children are rendered', () => {
      const col = component.find(Col).at(0);
      assert.equal(col.prop('sm'), 12);
    });

    it('should adjust the label width to 12', () => {
      const label = component.find(Label);
      assert.equal(label.length, 1);
      assert.equal(label.prop('sm'), 12);
      assert.equal(label.prop('className'), '');
    });
  });

  describe('with width', () => {
    const component = shallow(<FormLabelGroup width={{ xs: 10, sm: 9 }}>Hello World</FormLabelGroup>);

    it('should adjust the width of the inner column wrapping the children', () => {
      const col = component.find(Col).at(1);
      assert.equal(col.prop('xs'), 10);
      assert.equal(col.prop('sm'), 9);
    });
  });

  describe('with a hint', () => {
    const component = shallow(<FormLabelGroup hint="Psst! Check this out...">Hello World</FormLabelGroup>);

    it('should render FormText with the hint', () => {
      const hint = component.find(FormText);
      assert.equal(hint.length, 1);
      assert.equal(hint.prop('color'), 'muted');
      assert.equal(hint.children().text(), 'Psst! Check this out...');
    });
  });

  describe('with feedback', () => {
    const component = shallow(<FormLabelGroup feedback="You're doing amazing sweetie!">Hello World</FormLabelGroup>);

    it('should render FormFeedback with the feedback', () => {
      const feedback = component.find(FormFeedback);
      assert.equal(feedback.length, 1);
      assert.equal(feedback.children().text(), "You're doing amazing sweetie!");
    });
  });
});
