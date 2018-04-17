import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ReactSelect from 'react-select-plus';
import { SelectEmail } from '../../src';

describe('<SelectEmail />', () => {
  describe('uncontrolled', () => {
    describe('without defaultValue', () => {
      const component = shallow(<SelectEmail />);

      it('should have a blank default', () => {
        assert.equal(component.type(), ReactSelect.Creatable);
        assert.equal(component.prop('value'), null);
      });

      it('should clear input', () => {
        component.simulate('change', null);
        assert.equal(component.prop('value'), null);
      });
    });

    describe('with defaultValue', () => {
      const component = shallow(<SelectEmail defaultValue={2} />);

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
      const component = shallow(<SelectEmail onChange={callback} />);
      component.simulate('change', 'stuff');

      assert(callback.calledOnce);
      assert(callback.calledWith('stuff'));
    });
  });

  describe('controlled', () => {
    const component = shallow(<SelectEmail value={3} defaultValue={2} />);

    it('should render with the given value', () => {
      assert.equal(component.prop('value'), 3);
    });

    it('should not update the value when changed', () => {
      component.simulate('change', { label: 'Moe', value: 4 });
      assert.equal(component.prop('value'), 3);
    });
  });

  it('should default to multi class', () => {
    const component = mount(<SelectEmail />).find('.Select');
    assert(component.hasClass('Select--multi'));
  });

  it('should support focus', () => {
    const wrapper = mount(<SelectEmail />);
    const component = wrapper.instance();
    sinon.spy(component.selectEl, 'focus');
    component.focus();
    sinon.assert.calledOnce(component.selectEl.focus);
  });

  describe('onPaste', () => {
    it('should support on paste', () => {
      const wrapper = mount(<SelectEmail />);
      const evt = {
        preventDefault: () => {},
        clipboardData: { getData: () => 'natalie@natalie.com,dilraj@dilraj.com' }
      };
      wrapper.find('input').simulate('paste', evt);

      assert.equal(wrapper.find('SelectMultiValue').length, 2);
      assert.equal(wrapper.find('SelectMultiValue').at(0).text().trim(), 'natalie@natalie.com');
      assert.equal(wrapper.find('SelectMultiValue').at(1).text().trim(), 'dilraj@dilraj.com');
    });

    it('should filter out duplicates', () => {
      const wrapper = mount(<SelectEmail />);
      const evt = {
        preventDefault: () => {},
        clipboardData: { getData: () => 'dilraj@dilraj.com,dilraj@dilraj.com' }
      };
      wrapper.find('input').simulate('paste', evt);

      assert.equal(wrapper.find('SelectMultiValue').length, 1);
      assert.equal(wrapper.find('SelectMultiValue').at(0).text().trim(), 'dilraj@dilraj.com');
    });

    it('should filter out empty strings', () => {
      const wrapper = mount(<SelectEmail />);
      const evt = {
        preventDefault: () => {},
        clipboardData: { getData: () => 'dilraj@dilraj.com, ' }
      };
      wrapper.find('input').simulate('paste', evt);

      assert.equal(wrapper.find('SelectMultiValue').length, 1);
      assert.equal(wrapper.find('SelectMultiValue').at(0).text().trim(), 'dilraj@dilraj.com');
    });
  });
});
