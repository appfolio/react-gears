import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { shallow } from 'enzyme';

import { BoundFormRow } from '../../src';

describe('<BoundFormRow />', () => {
  describe('with context', () => {
    const onChange = sinon.stub();
    const onChangeFactory = () => onChange;

    const component = shallow(
      <BoundFormRow name="firstName" />, {
        context: {
          value: {
            firstName: 'First Name',
            lastName: 'Last Name'
          },
          errors: {
            firstName: 'Not Right',
            lastName: 'Something Else'
          },
          onChange: onChangeFactory
        }
      }
    );

    it('should forward props', () => {
      assert.equal(component.prop('name'), 'firstName');
    });

    it('should pass the value from context', () => {
      assert.equal(component.prop('value'), 'First Name');
    });

    it('should pass the error from context', () => {
      assert.equal(component.prop('feedback'), 'Not Right');
    });
  });

  describe('with false-like values', () => {
    const component = shallow(
      <BoundFormRow name="amount" />, {
        context: {
          value: {
            amount: 0,
          }
        }
      }
    );

    it('should only use default for undefined', () => {
      assert.strictEqual(component.prop('value'), 0);
    });
  });

  describe('with defaults', () => {
    const onChange = sinon.stub();
    const onChangeFactory = () => onChange;
    const component = shallow(
      <BoundFormRow name="firstName" />, { context: { onChange: onChangeFactory } }
    );

    it('should set the default context value', () => {
      assert.equal(component.prop('value'), '');
    });

    it('should set the default context errors', () => {
      assert.equal(component.prop('feedback'), '');
    });
  });

  describe('with onChange prop', () => {
    const spy = sinon.stub();
    const onChangeFactory = name => data => { spy(`${name} and ${data}`); };
    const onChange = sinon.stub();

    const component = shallow(
      <BoundFormRow name="firstName" onChange={onChange} />, { context: { onChange: onChangeFactory } }
    );

    it('should call both prop and context onChange', () => {
      component.simulate('change', 'stuff');
      assert(onChange.calledWith('stuff'), 'prop onChange not called properly');
      assert(spy.calledWith('firstName and stuff'), 'context onChange not called properly');
    });
  });
});
