import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import { List, ListItem } from '../../src';

describe('<List />', () => {
  const items = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'];

  it('should render correctly', () => {
    const component = shallow(<List items={items}>{item => item}</List>);
    assert(component);
  });

  it('should render correct items and default to unsorted', () => {
    const component = mount(
      <List items={items}>
        {item => <div id={item.toLowerCase()}>{item}</div>}
      </List>
    );
    const listItems = component.find(ListItem);
    assert.equal(listItems.length, items.length);

    listItems.forEach((item, i) => {
      assert.equal(item.text(), items[i]);
    });
  });

  it('should add className to each item', () => {
    const component = mount(<List items={items} itemClassName="yowza">{item => item}</List>);
    const listItems = component.find(ListItem);
    listItems.forEach(item => assert(item.hasClass('yowza')));
  });

  describe('expansion', () => {
    it('should call and render onExpand for each item', () => {
      const component = mount(
        <List
          items={items}
          onExpand={item => (item === 'Alpha') ? <div className="expanded">{item}</div> : null}
        >
          {item => item}
        </List>);
      const listItems = component.find('.expanded');
      assert.equal(listItems.length, 1);
      assert.equal(listItems.first().text(), 'Alpha');
    });
  });

  it('should pass height to scroll container', () => {
    const component = mount(
      <List items={items} height="69vw">
        {item => item}
      </List>
    );
    const container = component.find('ScrollContainer');
    assert.equal(container.prop('height'), '69vw');
  });

  describe('selection', () => {
    it('should not render selection controls by default', () => {
      const component = mount(
        <List items={items}>
          {item => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const inputs = component.find('input');
      assert.equal(inputs.length, 0);
    });

    it('should render the correct selection type', () => {
      const component = mount(
        <List items={items} select="checkbox">
          {item => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      let checkboxes = component.find('input[type="checkbox"]');
      let radios = component.find('input[type="radio"]');
      assert.equal(checkboxes.length, items.length + 1); // +1 for select all
      assert.equal(radios.length, 0);

      component.setProps({ select: 'radio' });
      checkboxes = component.find('input[type="checkbox"]');
      radios = component.find('input[type="radio"]');
      assert.equal(radios.length, items.length);
      assert.equal(checkboxes.length, 0);
    });

    it('should call onSelect when checkbox selection changes', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List items={items} select="checkbox" onSelect={onSelect}>
          {item => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');
      checkboxes.at(1).simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, [items[0]]);

      checkboxes.last().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, [items[0], items[4]]);
    });

    it('should call onSelect with all selectAll selection changes', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List items={items} select="checkbox" onSelect={onSelect}>
          {item => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');
      checkboxes.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, items);
    });

    it('should call onSelect when radio selection changes', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List items={items} select="radio" onSelect={onSelect}>
          {item => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const radios = component.find('input[type="radio"]');
      radios.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, [items[0]]);

      radios.last().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, [items[4]]);
    });

    it('should pre-select items specified in selected', () => {
      const component = mount(
        <List items={items} select="checkbox" selected={[items[1], items[3]]}>
          {item => item}
        </List>
      );

      const checkboxes = component
        .find('input[type="checkbox"]')
        .find({ checked: true });
      assert.equal(checkboxes.length, 2);
    });
  });
});
