/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import Icon from 'react-fontawesome';

import Alert from '../../src/components/Alert';

describe('<Alert />', () => {
  it('should have a default color of "warning"', () => {
    const component = shallow(<Alert/>);
    assert.equal(component.prop('className'), 'alert alert-warning');
  });

  describe('with icon', () => {
    it('should show bullhorn for warning', () => {
      const icon = shallow(<Alert icon color="warning" />).find(Icon);
      assert.equal(icon.prop('name'), 'bullhorn');
    });

    it('should show ban for danger', () => {
      const icon = shallow(<Alert icon color="danger" />).find(Icon);
      assert.equal(icon.prop('name'), 'ban');
    });

    it('should show info for info', () => {
      const icon = shallow(<Alert icon color="info" />).find(Icon);
      assert.equal(icon.prop('name'), 'info-circle');
    });

    it('should show check for success', () => {
      const icon = shallow(<Alert icon color="success" />).find(Icon);
      assert.equal(icon.prop('name'), 'check');
    });

    it('should wrap children with block (for alignment)', () => {
      const component = shallow(<Alert icon>Stuff Here</Alert>)
          , wrapper = component.children().find('div');
      assert.equal(wrapper.length, 1);
      assert.deepEqual(wrapper.prop('style'), { overflow: 'hidden' });
      assert.equal(wrapper.text(), 'Stuff Here');
    });
  });
});
