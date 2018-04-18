import assert from 'assert';

import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { ConfirmationButton, Col, HasManyFieldsRow } from '../../src';

describe('<HasManyFieldsRow />', () => {
  let onDelete;
  let component;
  let deleteButton;

  describe('when enabled', () => {
    beforeEach(() => {
      onDelete = sinon.spy();
      component = mount(
        <HasManyFieldsRow onDelete={onDelete}>Stuff</HasManyFieldsRow>
      );

      deleteButton = component.find(ConfirmationButton);
    });

    it('should have a delete button', () => {
      assert(deleteButton);
    });

    it('should call onDelete', () => {
      deleteButton.simulate('click');
      sinon.assert.notCalled(onDelete);
      assert.equal(deleteButton.text(), 'Delete');
      deleteButton.simulate('click');
      sinon.assert.calledOnce(onDelete);
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

      deleteButton = component.find(ConfirmationButton);
    });

    it('should have a disabled delete button', () => {
      assert.equal(deleteButton.prop('disabled'), true);
    });

    it('should not call onDelete', () => {
      deleteButton.simulate('click');
      assert.equal(onDelete.calledOnce, false);
    });
  });
});
