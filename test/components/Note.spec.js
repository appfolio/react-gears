import React from 'react';
import assert from 'assert';
import { Note } from '../../src';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('<Note />', () => {
  const note = {
    date: new Date("November 5, 1605 00:00:00"),
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
      assert.equal(`by ${note.from}`, component.ref('from').textContent);
    });

    it('should render date', () => {
      const expectedDate = 'Sat, November 5, 1605 at 12:00 AM'
      assert.equal(expectedDate, component.ref('date').textContent);
    });

    it('should render edited', () => {
      assert(component.ref('edited'));
    });

    it('should not render edit link if no onEdit prop', () => {
      assert.equal(undefined, component.ref('edit'));
    });

    it('should not render delete link if no onDelete prop', () => {
      assert.equal(undefined, component.ref('delete'));
    });
  });

  describe('optional', () => {
    const note2 = {
      date: new Date(),
      text: 'Hello World!'
    };

    const component = mount(<Note note={note2} />);

    it('should not render from', () => {
      assert.equal(undefined, component.ref('from'));
    });

    it('should not render edited', () => {
      assert.equal(undefined, component.ref('edited'));
    });
  });

  describe('edit', () => {
    const onEdit = sinon.spy();
    const component = mount(<Note note={note} onEdit={onEdit} />);

    it('should render edit link if onEdit prop', () => {
      assert(component);
      assert(component.ref('edit'));
    });

    it('should call onEdit on click', () => {
      component.ref('edit').onClick();
      assert.equal(onEdit.calledOnce, true);
    });
  });

  describe('delete', () => {
    const onDelete = sinon.spy();
    const component = mount(<Note note={note} onDelete={onDelete} />);

    it('should render delete link if onDelete prop', () => {
      assert(component);
      assert(component.ref('delete'));
    });

    it('should call onDelete on click', () => {
      component.ref('delete').onClick();
      assert.equal(onDelete.calledOnce, true);
    });
  });
});
