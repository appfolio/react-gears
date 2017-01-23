/* eslint-env mocha */

import 'jsdom-global/register';
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import Select from 'react-select';
import Select2 from '../../src/components/Select.js';

const OPTIONS = [
  { label: 'Eeny', value: 1 },
  { label: 'Meeny', value: 2 },
  { label: 'Miny', value: 3 },
  { label: 'Moe', value: 4 }
];

describe('<Select />', () => {
  describe('uncontrolled', () => {
    describe('without defaultValue', () => {
      const component = shallow(<Select2 options={OPTIONS} />);

      it('should have a blank default', () => {
        assert.equal(component.type(), Select);
        assert.equal(component.prop('value'), '');
      });

      it('should clear input', () => {
        component.simulate('change', null);
        assert.equal(component.prop('value'), null);
      });
    });

    describe('with defaultValue', () => {
      const component = shallow(<Select2 options={OPTIONS} defaultValue={2} />);

      it('should start with default', () => {
        assert.equal(component.prop('value'), 2);
      });

      it('should update the value when changed', () => {
        component.simulate('change', 'stuff');
        assert.equal(component.prop('value'), 'stuff');
      });
    });
  });

  describe('controlled', () => {
    const component = shallow(<Select2 options={OPTIONS} value={3} defaultValue={2} />);

    it('should render with the given value', () => {
      assert.equal(component.prop('value'), 3);
    });

    it('should not update the value when changed', () => {
      component.simulate('change', OPTIONS[3]);
      assert.equal(component.prop('value'), 3);
    });
  });

  it('should return async options correctly', () => {
    const getOptions = (input, callback) => {
      callback(null, {
        options: [
          { value: 'oogah', label: 'Oogah' },
          { value: 'chaka', label: 'Chaka' }
        ],
        complete: true
      });
    };

    const component = shallow(<Select2 loadOptions={getOptions} />);
    assert.equal(component.type(), Select.Async);
  });
});
