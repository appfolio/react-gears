import assert from 'assert';

import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import {
  Button,
  ConfirmationButton,
  Col,
  Collapse,
  HasManyFieldsRow,
  Tooltip
} from '../../src';

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

    it('should call closeCollapse when confirmation button not deleted and animated', () => {
      const closeCollapse = sinon.spy();
      component.instance().closeCollapse = closeCollapse;
      component.instance().forceUpdate();

      deleteButton.simulate('click');
      sinon.assert.notCalled(closeCollapse);
      assert.equal(deleteButton.text(), 'Delete');
      deleteButton.simulate('click');
      sinon.assert.calledOnce(closeCollapse);
    });

    it('should call onDelete when confirmation button not deleted or animated', () => {
      component = mount(
        <HasManyFieldsRow onDelete={onDelete} animated={false}>Stuff</HasManyFieldsRow>
      );
      deleteButton = component.find(ConfirmationButton);

      deleteButton.simulate('click');
      sinon.assert.notCalled(onDelete);
      assert.equal(deleteButton.text(), 'Delete');
      deleteButton.simulate('click');
      sinon.assert.calledOnce(onDelete);
    });

    it('should set isOpen to false when deleting', () => {
      assert.strictEqual(component.state('isOpen'), true);
      deleteButton.simulate('click');
      deleteButton.simulate('click');
      assert.strictEqual(component.state('isOpen'), false);
    });

    it('should put content in first column', () =>
      assert.equal(
        component
          .find(Col)
          .first()
          .render()
          .text(),
        'Stuff'
      ));

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
      <HasManyFieldsRow
        onDelete={onDelete}
        disabled
        disabledReason="NONE SHALL PASS"
      >
        Stuff
      </HasManyFieldsRow>
    );
    const disabledTooltip = component.find(Tooltip);
    assert.equal(disabledTooltip.length, 1);
    // TODO assert disabledReason text
  });

  it('should hide the delete button when deletable is false', () => {
    component = shallow(
      <HasManyFieldsRow deletable={false}>Stuff</HasManyFieldsRow>
    );
    assert.equal(component.find(ConfirmationButton).length, 0);
    assert.equal(component.find(Button).length, 0);
    assert.equal(component.find('.js-delete-col').length, 0);
  });

  it('should render Collapse when animated', () => {
    component = shallow(<HasManyFieldsRow animated />);

    assert.strictEqual(component.find(Collapse).length, 1);
  });

  it('should not render Collapse when not animated', () => {
    component = shallow(<HasManyFieldsRow animated={false} />);

    assert.strictEqual(component.find(Collapse).length, 0);
  });

  describe('when disabled and disabled reason', () => {
    let disabledTooltip;

    beforeEach(() => {
      component = shallow(
        <HasManyFieldsRow
          onDelete={onDelete}
          disabled
          disabledReason="NONE SHALL PASS"
        >
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

  it('should render properly a delete button that ignores tabbing', () => {
    component = shallow(
      <HasManyFieldsRow tabbingIgnoreDelete>Stuff</HasManyFieldsRow>
    );
    assert.strictEqual(component.find(ConfirmationButton).length, 1);
    assert.strictEqual(component.find(ConfirmationButton).props().tabIndex, -1);
  });
});
