import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import Input from '../Input/Input';
import Label from '../Label/Label';
import FormChoice from './FormChoice';
import FormGroup from './FormGroup';

describe('<FormChoice />', () => {
  describe('unknown type', () => {
    it('should generate an id when not set', () => {
      const wrapper = shallow(<FormChoice type="radio">A</FormChoice>);
      assert(wrapper.find('Input[id^="form-choice-"]').exists());
      assert(wrapper.find('Label[for^="form-choice-"]').exists());
    });

    it('should use id when set', () => {
      const wrapper = shallow(
        <FormChoice type="radio" id="yowza">
          A
        </FormChoice>
      );
      assert(wrapper.find('Input[id="yowza"]').exists());
      assert(wrapper.find('Label[for="yowza"]').exists());
    });
  });

  describe('type=select', () => {
    const component = shallow(
      <FormChoice type="select" value="foobar">
        Choice 1
      </FormChoice>
    );

    it('should render an <option>', () => {
      assert.equal(component.type(), 'option');
    });

    it('should forward contents', () => {
      assert.equal(component.text(), 'Choice 1');
    });

    it('should pass the value to the element', () => {
      assert.equal(component.prop('value'), 'foobar');
    });

    it('should pass the disabled prop to the element', () => {
      assert.equal(component.prop('disabled'), undefined);

      const enabledComponent = shallow(<FormChoice disabled type="select" />);
      assert.equal(enabledComponent.prop('disabled'), true);
    });
  });

  describe('type=checkbox', () => {
    it('should render with correct type and label', () => {
      const component = shallow(<FormChoice type="checkbox">my type</FormChoice>);

      assert.equal(component.find(Input).prop('type'), 'checkbox');
      assert.equal(component.find(Label).props().children, 'my type');
      assert.equal(component.type(), FormGroup);
    });

    it('should not have a FormGroup when not inline', () => {
      const component = shallow(
        <FormChoice type="checkbox" inline>
          my type
        </FormChoice>
      );

      assert.equal(component.find(Input).prop('type'), 'checkbox');
      assert.equal(component.find(Label).props().children, 'my type');
    });

    it('should pass on containerClassName as className', () => {
      const component = shallow(
        <FormChoice type="checkbox" containerClassName="myClass" inline>
          my type
        </FormChoice>
      );

      assert(/\bmyClass\b/.test(component.find('div').prop('className')));
    });

    describe('with computed value', () => {
      const computedComponent = shallow(<FormChoice type="checkbox">Choice 1</FormChoice>);

      const inputElement = computedComponent.find(Input);

      it('should compute a value', () => {
        assert.equal(inputElement.prop('value'), 'Choice 1');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });
    });

    describe('with explicit value', () => {
      const component = shallow(
        <FormChoice type="checkbox" value="A">
          Choice 1
        </FormChoice>
      );

      const inputElement = component.find(Input);

      it('should use given value', () => {
        assert.equal(inputElement.prop('value'), 'A');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });
    });
  });

  describe('type=radio', () => {
    it('should render with correct type and label', () => {
      const component = shallow(<FormChoice type="radio">my type</FormChoice>);

      assert.equal(component.find(Input).prop('type'), 'radio');
      assert.equal(component.find(Label).props().children, 'my type');
      assert.equal(component.type(), FormGroup);
    });

    it('should not have a FormGroup when not inline', () => {
      const component = shallow(
        <FormChoice type="radio" inline>
          my type
        </FormChoice>
      );

      assert.equal(component.find(Input).prop('type'), 'radio');
      assert.equal(component.find(Label).props().children, 'my type');
    });

    describe('with computed value', () => {
      const computedComponent = shallow(<FormChoice type="radio">Choice 1</FormChoice>);

      const inputElement = computedComponent.find(Input);

      it('should compute a value', () => {
        assert.equal(inputElement.prop('value'), 'Choice 1');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });
    });

    describe('with explicit value', () => {
      const component = shallow(
        <FormChoice type="radio" value="A">
          Choice 1
        </FormChoice>
      );

      const inputElement = component.find(Input);

      it('should use given value', () => {
        assert.equal(inputElement.prop('value'), 'A');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });
    });
  });
});
