/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { Note } from '../../src';
import { mount } from 'enzyme';
import sinon from 'sinon';

import fecha from 'fecha';

describe('<Note />', () => {
  const note = {
    date: new Date(),
    from: 'Jim Nabors',
    text: 'Hello World!',
    edited: true
  };

  describe('rendering', () => {
    const component = mount(<Note note={note} />);

    it('should render correctly', () => {
      assert(component);
      assert.equal(note.text, component.find('CardText').text());
    });

    it('should render from', () => {
      assert.equal(`by ${note.from}`, component.ref('from').text());
    });

    it('should render date', () => {
      const date = fecha.format(note.date, 'ddd, MMMM d, YYYY "at" h:mm A');
      assert.equal(date, component.ref('date').text());
    });

    it('should render edited', () => {
      assert(component.ref('edited').nodes.length);
    });

    it('should not render edit link if no onEdit prop', () => {
      assert.equal(component.ref('edit').nodes.length, 0);
    });

    it('should not render delete link if no onDelete prop', () => {
      assert.equal(component.ref('delete').nodes.length, 0);
    });
  });

  describe('optional', () => {
    const note2 = {
      date: new Date(),
      text: 'Hello World!'
    };

    const component = mount(<Note note={note2} />);

    it('should not render from', () => {
      assert.equal(component.ref('from').nodes.length, 0);
    });

    it('should not render edited', () => {
      assert.equal(component.ref('edited').nodes.length, 0);
    });
  });

  describe('edit', () => {
    const onEdit = sinon.spy();
    const component = mount(<Note note={note} onEdit={onEdit} />);

    it('should render edit link if onEdit prop', () => {
      assert(component);
      assert(component.ref('edit').nodes.length);
    });

    it('should call onEdit on click', () => {
      component.ref('edit').simulate('click');
      assert.equal(onEdit.calledOnce, true);
    });
  });

  describe('delete', () => {
    const onDelete = sinon.spy();
    const component = mount(<Note note={note} onDelete={onDelete} />);

    it('should render delete link if onDelete prop', () => {
      assert(component);
      assert(component.ref('delete').nodes.length);
    });

    it('should call onDelete on click', () => {
      component.ref('delete').simulate('click');
      assert.equal(onDelete.calledOnce, true);
    });
  });
});
