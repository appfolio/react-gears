import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Button, CardTitle, Collapse, Icon, BlockPanel } from '../../src';

describe('<BlockPanel />', () => {
  it('should be empty with no children', () => {
    const component = mount(<BlockPanel title="Open" />);

    assert.equal(component.find('CardBody').length, 0);
  });

  context('is expandable', () => {
    it('should be open by default', () => {
      const component = mount(
        <BlockPanel title="Open">
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
    });

    it('should be open by default', () => {
      const component = shallow(
        <BlockPanel title="Open" expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
    });

    it('should be closed when false passed as prop', () => {
      const component = shallow(
        <BlockPanel title="Open" open={false} expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 0);
      assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
    });

    it('should be open when true passed as prop', () => {
      const component = shallow(
        <BlockPanel title="Open" open expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
    });

    it('should open and close when clicked', () => {
      const component = mount(
        <BlockPanel title="Open" expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
      assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should not be hidden');
      component.find(CardTitle).simulate('click');
      assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
      component.find(Icon).simulate('click');
      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
      assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should not be hidden');
    });

    it('should honor state of open if state passed as prop', () => {
      const component = mount(
        <BlockPanel title="Open" expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
      assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should be visible');
      component.setProps({ open: false });
      component.update();

      assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
    });

    it('should show and hide when hideOnToggle is true', () => {
      const component = mount(
        <BlockPanel title="Open" expandable hideOnToggle>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
      assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should not be hidden');
      component.find(CardTitle).simulate('click');
      assert.equal(component.find('#hi').length, 1, 'inner block should be present');
      assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
      component.find(Icon).simulate('click');
      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
      assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should not be hidden');
    });

    it('should call onToggle when clicked and is initially open', () => {
      const onToggle = sinon.spy();

      const component = mount(
        <BlockPanel title="Open" expandable onToggle={onToggle}>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(onToggle.callCount, 0);
      component.find(CardTitle).simulate('click');
      assert.equal(onToggle.calledWith(false), true);
      component.find(CardTitle).simulate('click');
      assert.equal(onToggle.calledWith(true), true);
    });

    it('should call onToggle when clicked', () => {
      const onToggle = sinon.spy();

      const component = mount(
        <BlockPanel title="Open" expandable onToggle={onToggle} open={false}>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(onToggle.callCount, 0);
      component.find(CardTitle).simulate('click');
      assert.equal(onToggle.calledWith(true), true);
      component.find(CardTitle).simulate('click');
      assert.equal(onToggle.calledWith(false), true);
    });
  });

  context('contains headerComponent', () => {
    it('should render headerComponent', () => {
      const component = shallow(
        <BlockPanel title="Open" controls={<p id="edit">Edit</p>}>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
      assert.equal(component.find('#edit').length, 1);
    });
  });

  context('header components', () => {
    it('should not render edit link by default', () => {
      const component = mount(
        <BlockPanel title="Open">
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );
      const editButton = component.find(Button);
      assert.strictEqual(editButton.length, 0);
    });

    it('should render edit link when passed onEdit', () => {
      const component = mount(
        <BlockPanel title="Open" onEdit={() => {}}>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );
      const editButton = component.find(Button);
      assert.strictEqual(editButton.length, 1);
    });

    it('should call onEdit when clicked', () => {
      const onEdit = sinon.spy();

      const component = mount(
        <BlockPanel title="Open" onEdit={onEdit}>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );
      const editButton = component.find(Button);
      editButton.simulate('click');
      assert(onEdit.calledOnce);
    });

    it('should render title components when passed', () => {
      const component = mount(
        <BlockPanel
          title={<span id="title">WE ARE THE CHAMPIONS</span>}
          controls={<Button id="action">Go!</Button>}
        >
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );
      assert.equal(component.find('#title').first().text(), 'WE ARE THE CHAMPIONS');
      assert.equal(component.find('#action').first().text(), 'Go!');
    });
  });
});
