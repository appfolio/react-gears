import assert from 'assert';

import { mount, shallow } from 'enzyme';
import React from 'react';
import { Button, Col } from 'reactstrap';
import sinon from 'sinon';

import { HasManyFieldsRow, Icon } from '../../src';

describe('<HasManyFieldsRow />', () => {
  let onDelete;
  let component;
  let deleteButton;

  describe('when enabled', () => {
    beforeEach(() => {
      onDelete = sinon.spy();
      component = shallow(
        <HasManyFieldsRow onDelete={onDelete}>Stuff</HasManyFieldsRow>
      );

      deleteButton = component.find(Button);
    });

    it('should have a delete button', () => {
      assert.equal(deleteButton.prop('outline'), true);
      assert.equal(deleteButton.prop('color'), 'danger');
      assert.equal(deleteButton.find(Icon).prop('name'), 'trash-o');
    });

    it('should call onDelete', () => {
      deleteButton.simulate('click');
      assert.equal(onDelete.calledOnce, true);
    });

    it('should put content in first column', () =>
      assert.equal(component.find(Col).first().render().text(), 'Stuff'));
  });

  describe('when disabled', () => {
    beforeEach(() => {
      onDelete = sinon.spy();
      component = mount(
        <HasManyFieldsRow onDelete={onDelete} disabled>
          Stuff
        </HasManyFieldsRow>
      );

      deleteButton = component.find(Button);
    });

    it('should have a disabled delete button', () => {
      assert.equal(deleteButton.prop('outline'), true);
      assert.equal(deleteButton.prop('color'), 'secondary');
      assert.equal(deleteButton.prop('disabled'), true);
      assert.equal(deleteButton.find(Icon).prop('name'), 'trash-o');
    });

    it('should not call onDelete', () => {
      deleteButton.simulate('click');
      assert.equal(onDelete.calledOnce, false);
    });
  });
});
