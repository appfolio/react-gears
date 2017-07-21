import assert from 'assert';

import { shallow } from 'enzyme';
import React from 'react';
import { Input } from 'reactstrap';
import sinon, { spy } from 'sinon';

import { HasManyFields, HasManyFieldsAdd, HasManyFieldsRow } from '../../src';

const items = [ 'monkey', 'cat', 'mouse' ];

describe('<HasManyFields />', () => {
  describe('uncontrolled', () => {
    const onAdd = spy();
    const onRemove = spy();
    const onUpdate = spy();
    const onChange = spy();
    const component = shallow(
      <HasManyFields
        defaultValue={items}
        template={Input}
        blank={values => values.length.toString()}
        onAdd={onAdd}
        onRemove={onRemove}
        onUpdate={onUpdate}
        onChange={onChange}
        label="Add an Animal"
      />
    );

    const addItem = component.find(HasManyFieldsAdd);

    it('should copy the defaultValue to state', () => {
      assert.deepEqual(component.state('value'), items);
    });

    it('should have an add row button', () =>
      assert.equal(addItem.prop('children'), 'Add an Animal')
    );

    it('should have correct number of rows', () => {
      assert.equal(component.find(HasManyFieldsRow).length, items.length);
      assert.equal(component.find(Input).length, items.length);
    });

    it('should pass the items at values to template', () => {
      component.find(Input).forEach((input, i) => {
        assert.equal(input.prop('value'), items[i]);
      });
    });

    it('should add a row when add button is clicked', () => {
      const expectedItems = [ 'monkey', 'cat', 'mouse', '3' ];
      addItem.simulate('click');
      assert.equal(component.find(HasManyFieldsRow).length, expectedItems.length);
      assert.equal(component.find(Input).last().prop('value'), '3');
      assert.deepEqual(component.state('value'), expectedItems);
      sinon.assert.calledWith(onChange, expectedItems);
      assert.equal(items.length, 3);
      sinon.assert.calledOnce(onAdd);
    });

    it('should remove an item', () => {
      const expectedItems = [ 'monkey', 'mouse', '3' ];
      component.find(HasManyFieldsRow).at(1).simulate('delete');
      assert.equal(component.find(HasManyFieldsRow).length, expectedItems.length);
      assert.deepEqual(component.state('value'), expectedItems);
      sinon.assert.calledWith(onChange, expectedItems);
      assert.equal(items.length, 3);
      sinon.assert.calledWith(onRemove, 1);
    });

    it('should update an item', () => {
      const expectedItems = [ 'monkey', 'la souris est sous la table', '3' ];
      component.find(Input).at(1).simulate('change', expectedItems[1]);
      assert.equal(component.find(HasManyFieldsRow).length, expectedItems.length);
      assert.equal(component.find(Input).at(1).prop('value'), expectedItems[1]);
      assert.deepEqual(component.state('value'), expectedItems);
      sinon.assert.calledWith(onChange, expectedItems);
      assert.equal(items.length, 3);
      sinon.assert.calledWith(onUpdate, 1, expectedItems[1]);
    });
  });

  describe('controlled', () => {
    const onAdd = spy();
    const onRemove = spy();
    const onUpdate = spy();
    const onChange = spy();
    const component = shallow(
      <HasManyFields
        value={items}
        template={Input}
        blank={'foo'}
        onAdd={onAdd}
        onRemove={onRemove}
        onUpdate={onUpdate}
        onChange={onChange}
        label="Add an Animal"
      />
    );

    const addItem = component.find(HasManyFieldsAdd);

    it('should not have any state', () =>
      assert.equal(component.state(), null)
    );

    it('should have correct number of rows', () => {
      assert.equal(component.find(HasManyFieldsRow).length, items.length);
      assert.equal(component.find(Input).length, items.length);
    });

    it('should pass the items at values to template', () => {
      component.find(Input).forEach((input, i) => {
        assert.equal(input.prop('value'), items[i]);
      });
    });

    it('should add a row when add button is clicked', () => {
      const expectedItems = [ 'monkey', 'cat', 'mouse', 'foo' ];
      addItem.simulate('click');
      assert.deepEqual(component.find(Input).map(input => input.prop('value')), items);
      sinon.assert.calledWith(onChange, expectedItems);
      assert.equal(items.length, 3);
      sinon.assert.calledOnce(onAdd);
    });

    it('should remove an item', () => {
      const expectedItems = [ 'monkey', 'mouse' ];
      component.find(HasManyFieldsRow).at(1).simulate('delete');
      assert.deepEqual(component.find(Input).map(input => input.prop('value')), items);
      sinon.assert.calledWith(onChange, expectedItems);
      assert.equal(items.length, 3);
      sinon.assert.calledWith(onRemove, 1);
    });

    it('should update an item', () => {
      const expectedItems = [ 'monkey', 'cat', 'la souris est sous la table' ];
      component.find(Input).at(2).simulate('change', expectedItems[2]);
      assert.deepEqual(component.find(Input).map(input => input.prop('value')), items);
      sinon.assert.calledWith(onChange, expectedItems);
      assert.equal(items.length, 3);
      sinon.assert.calledWith(onUpdate, 2, expectedItems[2]);
    });
  });
});
