import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { NoteHeader } from '../../src';

describe('<NoteHeader />', () => {
  const note = {
    date: new Date('November 5, 1605 00:00:00'),
    from: 'Jim Nabors',
    text: 'Hello World!',
    edited: true,
    title: 'Whim Habors',
  };

  const dateFormat = 'ddd, MMMM D, YYYY "at" h:mm A';

  describe('rendering', () => {
    describe('with core information', () => {
      const component = mount(<NoteHeader note={note} dateFormat={dateFormat} showTimezone={false} />);

      it('should render a single CardHeader', () => {
        const cardHeader = component.find('CardHeader');

        assert(cardHeader.exists());
        assert.strictEqual(1, cardHeader.length);
      });

      it('should render date', () => {
        const expectedDate = 'Sat, November 5, 1605 at 12:00 AM';
        assert.strictEqual(expectedDate, component.find('.js-note-header__date').text());
      });

      it('should not render edit link if no onEdit prop', () => {
        assert.strictEqual(component.find('.js-note-header__edit').exists(), false);
      });

      it('should not render delete link if no onDelete prop', () => {
        assert.strictEqual(component.find('.js-note-header__delete').exists(), false);
      });
    });

    describe('with optional information', () => {
      const component = mount(<NoteHeader note={note} />);

      it('should render from', () => {
        assert.strictEqual(` by ${note.from}`, component.find('.js-note-header__from').text());
      });

      it('should render edited', () => {
        assert(component.find('.js-note-header__edited').exists());
      });

      it('should render title', () => {
        assert(component.find('CardTitle').exists());
      });

      it('has "ddd MMM DD YYYY HH:mm:ss" as default dateFormat prop', () => {
        assert.strictEqual(component.prop('dateFormat'), 'ddd MMM DD YYYY HH:mm:ss');
      });
    });

    describe('without optional information other than date', () => {
      const note2 = {
        date: new Date(),
        text: 'Hello World!',
        title: '',
      };

      const component = mount(<NoteHeader note={note2} />);

      it('should not render from', () => {
        assert.strictEqual(component.find('.js-note-header__from').exists(), false);
      });

      it('should not render edited', () => {
        assert.strictEqual(component.find('.js-note-header__edited').exists(), false);
      });

      it('should not render title', () => {
        assert.strictEqual(component.find('CardTitle').exists(), false);
      });
    });

    describe('without any optinal information', () => {
      const component = shallow(<NoteHeader note={{}} />);
      it('should render an empty CardHeader', () => {
        assert.strictEqual(component.find('.js-note-header__no_data').exists(), true);
        assert.strictEqual(component.find('CardHeader').exists(), false);
      });
    });
  });

  describe('edit', () => {
    describe('rendering', () => {
      const onEdit = sinon.spy();
      const component = mount(<NoteHeader note={note} onEdit={onEdit} />);

      it('should render edit link if onEdit prop', () => {
        assert(component);
        assert(component.find('.js-note-header__edit').exists());
      });

      it('should call onEdit on click', () => {
        component.find('.js-note-header__edit').hostNodes().simulate('click');
        assert.strictEqual(onEdit.calledOnce, true);
      });
    });
  });

  describe('delete', () => {
    describe('rendering', () => {
      const onDelete = sinon.spy();
      const component = mount(<NoteHeader note={note} onDelete={onDelete} />);

      it('should render delete link if onDelete prop', () => {
        assert(component);
        assert(component.find('.js-note-header__delete').exists());
      });

      it('should call onDelete on click', () => {
        component.find('.js-note-header__delete').hostNodes().simulate('click');
        assert.strictEqual(onDelete.calledOnce, true);
      });
    });
  });
});
