import assert from 'assert';

import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { ConfirmationButton, Col, HasManyFieldsRow, Tooltip } from '../../src';

describe('<HasManyFieldsRow />', () => {
  let onDelete;
  let component;
  let deleteButton;
  let tooltip;

  describe('when enabled', () => {
    beforeEach(() => {
      onDelete = sinon.spy();
      component = mount(
        <HasManyFieldsRow onDelete={onDelete}>Stuff</HasManyFieldsRow>
      );

      deleteButton = component.find(ConfirmationButton);
      tooltip = component.find(Tooltip);
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

    it('should not have a disabled tooltip', () => {
      assert.equal(tooltip.length, 0);
    });
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
      tooltip = component.find(Tooltip);
    });

    it('should have a disabled delete button', () => {
      assert.equal(deleteButton.prop('disabled'), true);
    });

    it('should not call onDelete', () => {
      deleteButton.simulate('click');
      assert.equal(onDelete.calledOnce, false);
    });

    it('should not have a disabled tooltip without disabledReason', () => {
      assert.equal(tooltip.length, 0);
    });
  });

  it('should have a disabled tooltip when disabled and disabledReason', () => {
    component = shallow(
      <HasManyFieldsRow onDelete={onDelete} disabled disabledReason="NONE SHALL PASS">
        Stuff
      </HasManyFieldsRow>
    );
    const disabledTooltip = component.find(Tooltip);
    assert.equal(disabledTooltip.length, 1);
    // TODO assert disabledReason text
  });
});
