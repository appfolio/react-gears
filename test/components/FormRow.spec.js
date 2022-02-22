import React from 'react';
import assert from 'assert';
import { render, shallow } from 'enzyme';

import {
  CheckboxInput,
  FileInput,
  FormRow,
  FormChoice,
  Input,
  FormLabelGroup,
  RadioInput,
  StaticInput,
} from '../../src';

describe('<FormRow />', () => {
  describe('by default', () => {
    const component = shallow(<FormRow label="First Name" id="someID" size="sm" />);

    it('should create a FormLabelGroup', () => {
      const formLabelGroup = component.find(FormLabelGroup);
      assert.equal(formLabelGroup.length, 1);
      assert.equal(formLabelGroup.prop('label'), 'First Name');
      assert.equal(formLabelGroup.prop('inputId'), 'someID');
      assert.equal(formLabelGroup.prop('size'), 'sm');
    });

    it('should have an Input', () => {
      const input = component.find(Input);
      assert.equal(input.length, 1);
      assert.equal(input.prop('id'), 'someID');
      assert.equal(input.prop('size'), 'sm');
      assert.equal(input.prop('type'), 'text');
    });
  });

  describe('with static type', () => {
    const component = shallow(<FormRow label="First Name" type="static" />);

    it('should render a StaticInput', () => {
      const input = component.find(StaticInput);
      assert.equal(input.length, 1);
    });
  });

  describe('with checkbox type', () => {
    const component = shallow(<FormRow label="First Name" type="checkbox" />);

    it('should render a CheckboxInput', () => {
      assert.equal(component.find(CheckboxInput).length, 1);
    });
  });

  describe('with radio type', () => {
    const component = shallow(<FormRow label="First Name" type="radio" />);

    it('should render a RadioInput', () => {
      assert.equal(component.find(RadioInput).length, 1);
    });
  });

  describe('with file type', () => {
    const wrapper = shallow(<FormRow type="file" />);

    it('should render a FileInput', () => {
      assert.equal(wrapper.find(FileInput).length, 1);
    });
  });

  describe('with custom type', () => {
    const customComponent = () => <div>Hi</div>;
    const component = shallow(<FormRow label="First Name" type={customComponent} />);

    it('should render custom input', () => {
      const custom = component.find(customComponent);
      assert.equal(custom.length, 1);
      assert.equal(custom.first().prop('type'), null);
    });

    describe('that does not grok validity', () => {
      const customComponent2 = ({ ...props }) => (
        <div>
          {props.valid !== undefined && 'valid!'}
          {props.invalid !== undefined && 'invalid!'}
        </div>
      );

      customComponent2.propTypes = {};

      it('should omit valid/invalid props', () => {
        const component2 = render(
          <FormRow label="First Name" type={customComponent2} feedback="Na brah" />
        );
        assert.equal(component2.toString().indexOf('valid!'), -1);
        assert.equal(component2.toString().indexOf('invalid!'), -1);
      });
    });
  });

  describe('stacked', () => {
    const component = shallow(<FormRow label="First Name" stacked />);

    it('should have a stacked property', () => {
      const formLabelGroup = component.find(FormLabelGroup);
      assert.equal(formLabelGroup.prop('stacked'), true);
    });
  });

  describe('with custom width', () => {
    const component = shallow(<FormRow label="First Name" width={{ xs: 6, sm: 7 }} />);

    it('should set the FormLabelGroup width', () => {
      const formLabelGroup = component.find(FormLabelGroup);
      assert.deepEqual(formLabelGroup.prop('width'), { xs: 6, sm: 7 });
    });
  });

  describe('with custom labelSize', () => {
    const component = shallow(<FormRow label="First Name" labelSize="sm" />);

    it('should set the FormLabelGroup labelSize', () => {
      const formLabelGroup = component.find(FormLabelGroup);
      assert.equal(formLabelGroup.prop('labelSize'), 'sm');
    });
  });

  describe('with children', () => {
    const component = shallow(
      <FormRow label="First Name" type="select">
        <FormChoice value="a">A</FormChoice>
        {false && <FormChoice value="b">B</FormChoice>}
        {undefined && <FormChoice value="c">C</FormChoice>}
        {true && <FormChoice value="d">D</FormChoice>}
      </FormRow>
    );

    it('should pass type to children', () => {
      const input = component.find(Input);
      input.children().forEach((child) => {
        assert.equal(child.prop('type'), 'select');
      });
    });

    it('should ignore falsy children', () => {
      const input = component.find(Input);
      assert.equal(input.children().length, 2);
      assert.equal(input.childAt(0).children().text(), 'A');
      assert.equal(input.childAt(1).children().text(), 'D');
    });
  });
});
