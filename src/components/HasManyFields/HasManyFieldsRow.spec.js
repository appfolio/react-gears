import assert from 'assert';
import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Button from '../Button/Button';
import ConfirmationButton from '../Button/ConfirmationButton';
import Col from '../Layout/Col';
import Tooltip from '../Tooltip/Tooltip';
import HasManyFieldsRow from './HasManyFieldsRow';

describe('<HasManyFieldsRow />', () => {
  let onDelete;
  let component;
  let deleteButton;
  let tooltip;

  describe('when enabled', () => {
    beforeEach(() => {
      onDelete = sinon.spy();
      component = mount(<HasManyFieldsRow onDelete={onDelete}>Stuff</HasManyFieldsRow>);

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

      deleteButton = component.find(Button);
      tooltip = component.find(Tooltip);
    });

    it('should have a disabled delete button', () => {
      assert.equal(deleteButton.hasClass('disabled'), true);
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

  it('should hide the delete button when deletable is false', () => {
    component = shallow(<HasManyFieldsRow deletable={false}>Stuff</HasManyFieldsRow>);
    assert.equal(component.find(ConfirmationButton).length, 0);
    assert.equal(component.find(Button).length, 0);
    assert.equal(component.find('.js-delete-col').length, 0);
  });

  describe('when disabled and disabled reason', () => {
    let disabledTooltip;

    beforeEach(() => {
      component = shallow(
        <HasManyFieldsRow onDelete={onDelete} disabled disabledReason="NONE SHALL PASS">
          Stuff
        </HasManyFieldsRow>
      );
      disabledTooltip = component.find(Tooltip);
    });

    it('should have tooltip', () => {
      assert.equal(disabledTooltip.length, 1);
      // TODO assert disabledReason text
    });

    it('defaults disabledReasonPlacement to top', () => {
      assert.equal(disabledTooltip.prop('placement'), 'top');
    });

    it('sets tooltip placement based on disabledReasonPlacement', () => {
      component = shallow(
        <HasManyFieldsRow
          onDelete={onDelete}
          disabled
          disabledReason="NONE SHALL PASS"
          disabledReasonPlacement="left"
        >
          Stuff
        </HasManyFieldsRow>
      );
      disabledTooltip = component.find(Tooltip);
      assert.equal(disabledTooltip.prop('placement'), 'left');
    });
  });

  it('should pass down props to delete button', () => {
    component = shallow(<HasManyFieldsRow deleteProps={{ tabIndex: -1 }}>Stuff</HasManyFieldsRow>);
    assert.strictEqual(component.find(ConfirmationButton).length, 1);
    assert.strictEqual(component.find(ConfirmationButton).props().tabIndex, -1);
  });
});
