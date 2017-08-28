import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input, Label, FormGroup, FormChoice } from '../../src';

describe('<FormChoice />', () => {
  describe('unknown type', () => {
    it('should throw an error', () => {
      assert.throws(() => {
        shallow(<FormChoice type="foobar">A</FormChoice>);
      }, /Type 'foobar' is not supported/);
    });
  });

  describe('type=select', () => {
    const component = shallow(
      <FormChoice type="select" value="foobar">Choice 1</FormChoice>
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
  });

  describe('type=checkbox', () => {
    it('should render with correct type and label', () => {
      const component = shallow(
        <FormChoice type="checkbox">my type</FormChoice>
      );

      assert.equal(component.find(Input).prop('type'), 'checkbox');
      assert.equal(component.find('span').text(), 'my type');
      assert.equal(component.type(), FormGroup);
    });

    it('should not have a FormGroup when not inline', () => {
      const component = shallow(
        <FormChoice type="checkbox" inline>my type</FormChoice>
      );

      assert.equal(component.find(Input).prop('type'), 'checkbox');
      assert.equal(component.find('span').text(), 'my type');
      assert.equal(component.type(), Label);
    });

    describe('with computed value', () => {
      const computedComponent = shallow(
        <FormChoice type="checkbox">Choice 1</FormChoice>
      );

      const inputElement = computedComponent.find(Input);

      it('should compute a value', () => {
        assert.equal(inputElement.prop('value'), 'Choice 1');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });

      it('should use selected choices (selected)', () => {
        const boundComponent = shallow(
          <FormChoice type="checkbox" selected={['A', 'B']}>A</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), true);
      });

      it('should use selected choices (unselected)', () => {
        const boundComponent = shallow(
          <FormChoice type="checkbox" selected={['A', 'B']}>C</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), false);
      });
    });

    describe('with explicit value', () => {
      const component = shallow(
        <FormChoice type="checkbox" value='A'>Choice 1</FormChoice>
      );

      const inputElement = component.find(Input);

      it('should use given value', () => {
        assert.equal(inputElement.prop('value'), 'A');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });

      it('should use selected choices (selected)', () => {
        const boundComponent = shallow(
          <FormChoice type="checkbox" value='stuff' selected={['stuff', 'B']}>A</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), true);
      });

      it('should use selected choices (unselected)', () => {
        const boundComponent = shallow(
          <FormChoice type="checkbox" value='stuff' selected={['A', 'B']}>C</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), false);
      });
    });
  });

  describe('type=radio', () => {
    it('should render with correct type and label', () => {
      const component = shallow(
        <FormChoice type="radio">my type</FormChoice>
      );

      assert.equal(component.find(Input).prop('type'), 'radio');
      assert.equal(component.find('span').text(), 'my type');
      assert.equal(component.type(), FormGroup);
    });

    it('should not have a FormGroup when not inline', () => {
      const component = shallow(
        <FormChoice type="radio" inline>my type</FormChoice>
      );

      assert.equal(component.find(Input).prop('type'), 'radio');
      assert.equal(component.find('span').text(), 'my type');
      assert.equal(component.type(), Label);
    });

    describe('with computed value', () => {
      const computedComponent = shallow(
        <FormChoice type="radio">Choice 1</FormChoice>
      );

      const inputElement = computedComponent.find(Input);

      it('should compute a value', () => {
        assert.equal(inputElement.prop('value'), 'Choice 1');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });

      it('should use selected choices (selected)', () => {
        const boundComponent = shallow(
          <FormChoice type="radio" selected="A">A</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), true);
      });

      it('should use selected choices (unselected)', () => {
        const boundComponent = shallow(
          <FormChoice type="radio" selected="A">C</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), false);
      });
    });

    describe('with explicit value', () => {
      const component = shallow(
        <FormChoice type="radio" value='A'>Choice 1</FormChoice>
      );

      const inputElement = component.find(Input);

      it('should use given value', () => {
        assert.equal(inputElement.prop('value'), 'A');
      });

      it('should not have checked state', () => {
        assert.equal(inputElement.prop('checked'), undefined);
      });

      it('should use selected choices (selected)', () => {
        const boundComponent = shallow(
          <FormChoice type="radio" value='stuff' selected="stuff">A</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), true);
      });

      it('should use selected choices (unselected)', () => {
        const boundComponent = shallow(
          <FormChoice type="radio" value='stuff' selected="A">C</FormChoice>
        );
        assert.equal(boundComponent.find(Input).prop('checked'), false);
      });
    });
  });
});
