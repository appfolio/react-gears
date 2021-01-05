import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
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
        assert.equal(component.type(), ReactSelect);
        assert.equal(component.prop('value'), null);
        assert(!component.hasClass('select-async'));
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
    assert.equal(component.type(), ReactSelect.Async);
    assert(component.hasClass('select-async'));
  });

  it('should append the async class to the className prop', () => {
    const getOptions = (input, callback) => {
      callback(null, {
        options: [
          { value: 'oogah', label: 'Oogah' },
          { value: 'chaka', label: 'Chaka' }
        ],
        complete: true
      });
    };

    const component = shallow(<Select loadOptions={getOptions} className="foo bar" />);
    assert.equal(component.type(), ReactSelect.Async);
    assert(component.hasClass('foo'));
    assert(component.hasClass('bar'));
    assert(component.hasClass('select-async'));
  });

  it('should default to single class', () => {
    const component = mount(<Select />).find('.Select');
    assert(component.hasClass('Select--single'));
  });

  it('should append the multi class', () => {
    const component = mount(<Select multi />).find('.Select');
    assert(component.hasClass('Select--multi'));
  });

  it('should support focus', () => {
    const wrapper = mount(<Select />);
    const component = wrapper.instance();
    sinon.spy(component.selectEl, 'focus');
    component.focus();
    sinon.assert.calledOnce(component.selectEl.focus);
  });

  it('should render AsyncCreatable if loadOptions and creatable', () => {
    const getOptions = () => {};

    const component = shallow(<Select loadOptions={getOptions} creatable />);
    assert.equal(component.type(), ReactSelect.AsyncCreatable);
  });

  it('should render Creatable if creatable', () => {
    const component = shallow(<Select creatable />);
    assert.equal(component.type(), ReactSelect.Creatable);
  });

  it('should pass name prop', () => {
    const component = mount(<Select name="Yowza" />);
    assert(component.find('input[name="Yowza"]').exists());
  });

  it('should use name prop for underlying hidden input', () => {
    const component = mount(<Select name="Yowza" options={OPTIONS} />);
    assert(component.find('input[name="Yowza"]').exists());
    assert(!component.find('input[name="Yowza"][type="hidden"]').exists());
    component.instance().onChange(OPTIONS[3]);
    component.update();
    assert(component.find('input[name="Yowza"][type="hidden"]').exists());
  });

  it('should pass inputProps name prop', () => {
    const component = mount(<Select inputProps={{ name: 'Gonzo' }} />);
    assert(component.find('input[name="Gonzo"]').exists());
  });
});
