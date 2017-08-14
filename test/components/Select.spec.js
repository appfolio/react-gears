import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ReactSelect from 'react-select-plus';
import { Select } from '../../src';

const OPTIONS = [
  { label: 'Eeny', value: 1 },
  { label: 'Meeny', value: 2 },
  { label: 'Miny', value: 3 },
  { label: 'Moe', value: 4 }
];

describe('<Select />', () => {
  describe('uncontrolled', () => {
    describe('without defaultValue', () => {
      const component = shallow(<Select options={OPTIONS} />);

      it('should have a blank default', () => {
        assert.equal(component.dive().type(), ReactSelect);
        assert.equal(component.prop('value'), null);
      });

      it('should clear input', () => {
        component.simulate('change', null);
        assert.equal(component.prop('value'), null);
      });
    });

    describe('with defaultValue', () => {
      const component = shallow(<Select options={OPTIONS} defaultValue={2} />);

      it('should start with default', () => {
        assert.equal(component.prop('value'), 2);
      });

      it('should update the value when changed', () => {
        component.simulate('change', 'stuff');
        assert.equal(component.prop('value'), 'stuff');
      });
    });

    it('should call additional onChange', () => {
      const callback = sinon.spy();
      const component = shallow(<Select options={OPTIONS} onChange={callback} />);
      component.simulate('change', 'stuff');

      assert(callback.calledOnce);
      assert(callback.calledWith('stuff'));
    });
  });

  describe('controlled', () => {
    const component = shallow(<Select options={OPTIONS} value={3} defaultValue={2} />);

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

    const component = shallow(<Select loadOptions={getOptions} />);
    assert.equal(component.dive().type(), ReactSelect.Async);
  });
});
