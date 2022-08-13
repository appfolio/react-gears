import assert from 'assert';
import { render, shallow } from 'enzyme';
import React from 'react';
import CheckboxInput from '../Checkbox/CheckboxInput';
import FileInput from '../Input/FileInput';
import StaticInput from '../Input/StaticInput';
import RadioInput from '../Radio/RadioInput';
import FormChoice from './FormChoice';
import FormLabelGroup from './FormLabelGroup';
import FormRow from './FormRow';

describe('<FormRow />', () => {
  describe('by default', () => {
    const component = render(<FormRow label="First Name" id="someID" size="sm" />);

    it('should have a label', () => {
      const labelEl = component.find('label[for=someID]');
      assert.equal(labelEl.text(), 'First Name');
    });

    it('should have an input', () => {
      const inputEl = component.find('input#someID');
      assert.equal(inputEl.attr().type, 'text');
      assert.match(inputEl.attr().class, /sm/);
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
    const Custom = () => <div>Hi</div>;
    const component = shallow(<FormRow label="First Name" type={Custom} />);

    it('should render custom input', () => {
      const custom = component.find(Custom);
      assert.equal(custom.length, 1);
      assert.equal(custom.first().prop('type'), null);
    });

    describe('that does not grok validity', () => {
      const Custom2 = ({ ...props }) => (
        <div>
          {props.valid !== undefined && 'valid!'}
          {props.invalid !== undefined && 'invalid!'}
        </div>
      );
      Custom2.propTypes = {};

      it('should omit valid/invalid props', () => {
        const component2 = render(<FormRow label="First Name" type={Custom2} feedback="Na brah" />);
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
    const component = render(
      <FormRow label="Items" type="checkbox">
        <FormChoice id="cb1" value="A" />
        {false && <FormChoice id="cb2" value="B" />}
        <FormChoice id="cb3" value="C" />
      </FormRow>
    );

    it('should pass type to children', () => {
      const inputEls = component.find('input');
      assert(inputEls.length !== 0);
      inputEls.each((_, inputEl) => {
        assert.equal(inputEl.attribs.type, 'checkbox');
      });
    });

    it('should ignore falsy children', () => {
      assert.equal(component.find('input').length, 2);
      assert.equal(component.find('#cb2').length, 0);
    });
  });
});
