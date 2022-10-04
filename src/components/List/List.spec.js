import assert from 'assert';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Label } from 'reactstrap';
import sinon from 'sinon';
import List from './List';
import ListItem from './ListItem';

describe('<List />', () => {
  const items = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'];

  it('should render correctly', () => {
    const component = shallow(<List items={items}>{(item) => item}</List>);
    assert(component);
  });

  it('should render correct items and default to unsorted', () => {
    const component = mount(
      <List items={items}>{(item) => <div id={item.toLowerCase()}>{item}</div>}</List>
    );
    const listItems = component.find(ListItem);
    assert.equal(listItems.length, items.length);

    listItems.forEach((item, i) => {
      assert.equal(item.text(), items[i]);
    });
  });

  it('should add className to each item', () => {
    const component = mount(
      <List items={items} itemClassName="yowza">
        {(item) => item}
      </List>
    );
    const listItems = component.find(ListItem);
    listItems.forEach((item) => assert(item.hasClass('yowza')));
  });

  describe('expansion', () => {
    it('should call and render onExpand for each item', () => {
      const component = mount(
        <List
          items={items}
          onExpand={(item) => (item === 'Alpha' ? <div className="expanded">{item}</div> : null)}
        >
          {(item) => item}
        </List>
      );
      const listItems = component.find('.expanded');
      assert.equal(listItems.length, 1);
      assert.equal(listItems.first().text(), 'Alpha');
    });

    it('should hide chevron if onExpand returns undefined for item', () => {
      const component = mount(
        <List
          items={items}
          onExpand={(item) =>
            item === 'Alpha' || item === 'Charlie' ? undefined : <div>{item}</div>
          }
        >
          {(item) => item}
        </List>
      );
      const buttons = component.find('Button');

      assert.equal(buttons.length, 5);
      assert.equal(buttons.at(0).props().style.visibility, 'hidden');
      assert.equal(buttons.at(1).props().style.visibility, 'visible');
      assert.equal(buttons.at(2).props().style.visibility, 'hidden');
      assert.equal(buttons.at(3).props().style.visibility, 'visible');
      assert.equal(buttons.at(4).props().style.visibility, 'visible');
    });
  });

  describe('header', () => {
    it('should not render the header', () => {
      const wrapper = mount(<List items={items} />);

      assert.equal(wrapper.find('.js-header').length, 0);
    });

    it('should render a custom header', () => {
      const wrapper = mount(
        <List
          items={items}
          header={<h4 className="js-custom-header">Hey it me, your custom header</h4>}
        />
      );

      const header = wrapper.find('.js-custom-header');
      assert.equal(header.length, 1);
    });
  });

  it('should pass height to scroll container', () => {
    const component = mount(
      <List items={items} height="69vw">
        {(item) => item}
      </List>
    );
    const container = component.find('ScrollContainer');
    assert.equal(container.prop('height'), '69vw');
  });

  it('should pass scrollPositionKey to scroll container', () => {
    const component = mount(
      <List items={items} scrollPositionKey="example-scroll-position-key">
        {(item) => item}
      </List>
    );
    const container = component.find('ScrollContainer');
    assert.equal(container.prop('scrollPositionKey'), 'example-scroll-position-key');
  });

  describe('selection', () => {
    it('should select and deselect all', () => {
      const { container, getByTestId } = render(
        <List items={items} select="checkbox">
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );

      expect(container.querySelectorAll('input:checked').length).toBeFalsy();

      getByTestId('select-all').click();
      expect(container.querySelectorAll('input:checked').length).toBe(items.length + 1);

      getByTestId('select-all').click();
      expect(container.querySelectorAll('input:checked').length).toBeFalsy();
    });

    it('should select and deselect all when using selectedKeyMapper', () => {
      const complexItems = [
        { key: '1', name: 'Darth' },
        { key: '2', name: 'Luke' },
      ];
      const { container, getByTestId } = render(
        <List items={complexItems} select="checkbox" selectedKeyMapper={(item) => item.key}>
          {(item) => <div id={item.name.toLowerCase()}>{item.name}</div>}
        </List>
      );

      expect(container.querySelectorAll('input:checked').length).toBeFalsy();

      getByTestId('select-all').click();
      expect(container.querySelectorAll('input:checked').length).toBe(complexItems.length + 1);

      getByTestId('select-all').click();
      expect(container.querySelectorAll('input:checked').length).toBeFalsy();
    });

    it('should select and deselect item', () => {
      const objs = items.map((i) => {
        return { value: i, key: i };
      });
      const component = render(
        <List items={objs} select="checkbox">
          {(item) => <div id={item.key}>{item.value}</div>}
        </List>
      );

      component.getByLabelText('Select Charlie').click();

      assert.strictEqual(component.getByLabelText('Select Charlie').checked, true);
      assert.strictEqual(component.container.querySelectorAll('input:indeterminate').length, 1);

      component.getByLabelText('Select Charlie').click();

      assert.strictEqual(component.getByLabelText('Select Charlie').checked, false);
    });

    it('should not render selection controls by default', () => {
      const component = mount(
        <List items={items}>{(item) => <div id={item.toLowerCase()}>{item}</div>}</List>
      );
      const inputs = component.find('input');
      assert.equal(inputs.length, 0);
    });

    it('should render the correct selection type', () => {
      const component = mount(
        <List items={items} select="checkbox">
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
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
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');
      checkboxes.at(1).simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, [items[0]]);

      checkboxes.last().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, [items[0], items[4]]);
    });

    it('should disable the selection icon if not selectable', () => {
      const component = mount(
        <List items={items} select="checkbox" selectable={(item) => item !== 'Alpha'}>
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');
      assert.strictEqual(checkboxes.length, items.length + 1); // +1 for select all

      assert(checkboxes.at(1).prop('disabled'));
      for (let i = 2; i < items.length + 1; i += 1) {
        assert(!checkboxes.at(i).prop('disabled'));
      }
    });

    it('should call onSelect with all selectAll selection changes by default', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List items={items} select="checkbox" onSelect={onSelect}>
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');
      checkboxes.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, items);
    });

    it('should call onSelect with all selectable items', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List
          items={items}
          select="checkbox"
          onSelect={onSelect}
          selectable={(item) => item !== 'Alpha'}
        >
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');

      checkboxes.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, ['Bravo', 'Charlie', 'Delta', 'Echo']);

      checkboxes.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, []);
    });

    it('should only select and deselect selectable items', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List
          items={items}
          select="checkbox"
          selected={['Alpha']}
          onSelect={onSelect}
          selectable={(item) => item !== 'Alpha'}
        >
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
        </List>
      );
      const checkboxes = component.find('input[type="checkbox"]');

      checkboxes.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']);

      checkboxes.first().simulate('change', { target: { checked: true } });
      sinon.assert.calledWith(onSelect, ['Alpha']);
    });

    it('should call onSelect when radio selection changes', () => {
      const onSelect = sinon.stub();
      const component = mount(
        <List items={items} select="radio" onSelect={onSelect}>
          {(item) => <div id={item.toLowerCase()}>{item}</div>}
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
          {(item) => item}
        </List>
      );

      const checkboxes = component.find('input[type="checkbox"]').find({ checked: true });
      assert.equal(checkboxes.length, 2);
    });
  });

  describe('sorting', () => {
    it('should not render the sort component', () => {
      const wrapper = mount(<List items={items} />);

      assert.equal(wrapper.find('.js-sort-header').length, 0);
    });

    it('calls onSort when the property changes', () => {
      const onSort = sinon.stub();
      const wrapper = mount(
        <List
          items={items}
          onSort={onSort}
          sort={{ property: 'last', ascending: true }}
          sortOptions={[
            { label: 'First Name', value: 'first' },
            { label: 'Last Name', value: 'last' },
          ]}
        />
      );

      wrapper
        .find('.js-sort-header')
        .find('select')
        .simulate('change', { target: { value: 'first' } });

      sinon.assert.calledWithExactly(onSort, { property: 'first', ascending: true });
    });

    it('calls onSort when the direction changes', () => {
      const onSort = sinon.stub();
      const wrapper = mount(
        <List
          items={items}
          onSort={onSort}
          sort={{ property: 'last', ascending: true }}
          sortOptions={[
            { label: 'First Name', value: 'first' },
            { label: 'Last Name', value: 'last' },
          ]}
        />
      );
      assert.equal(wrapper.find('.js-sort-header').find('Icon').props().name, 'arrow-up');

      wrapper.find('.js-sort-header').find('button').simulate('click');

      assert.equal(wrapper.find('.js-sort-header').find('Icon').props().name, 'arrow-down');
      sinon.assert.calledWithExactly(onSort, { property: 'last', ascending: false });
    });
  });

  describe('filter', () => {
    it('should not render the filter component', () => {
      const wrapper = mount(<List items={items} />);

      assert.equal(wrapper.find('.js-filter').length, 0);
    });

    it('calls onFilter when filter input changes', () => {
      const onFilter = sinon.stub();
      const wrapper = mount(<List items={items} onFilter={onFilter} filter="gary" />);

      const input = wrapper.find('Input.js-filter');
      assert.equal(input.prop('value'), 'gary');

      input.simulate('change', { target: { value: '123' } });

      sinon.assert.calledWithExactly(onFilter, '123');
    });
  });

  it('provides full width to header when there is no sort or filtering', () => {
    const header = <div className="custom-header">Test</div>;
    const wrapper = mount(<List items={items} header={header} />);

    assert.strictEqual(wrapper.find('.custom-header').parent().hasClass('w-100'), true);
  });

  it('should add styling to each item when selectAnywhere is true', () => {
    const component = mount(
      <List items={items} selectAnywhere>
        {(item) => item}
      </List>
    );
    const listItems = component.find(ListItem);
    listItems.forEach((item) => {
      assert.equal(item.prop('tag'), Label);
      assert.equal(item.prop('style').cursor, 'pointer');
      assert.equal(item.prop('style').marginBottom, 0);
    });
  });
});
