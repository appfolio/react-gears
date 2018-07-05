import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { CardText, Note } from '../../src';

describe('<Note />', () => {
  let component;
  let note;
  let props;

  beforeEach(() => {
    note = {
      date: new Date('November 5, 1605 00:00:00'),
      from: 'Jim Nabors',
      text: 'Hello World!',
      edited: true
    };
    props = {
      note,
      onCancel: sinon.spy(),
      onChange: sinon.spy(),
      onDelete: sinon.spy(),
      onEdit: sinon.spy(),
      onSave: sinon.spy(),
      onUndelete: sinon.spy(),
    };
  });

  describe('rendering', () => {
    context('in default mode', () => {
      beforeEach(() => {
        component = mount(<Note {...props} />);
      });

      describe('should render a note card', () => {
        it('should render a single Card', () => {
          const card = component.find('Card');

          assert(card.exists());
          assert.equal(1, card.length);
        });

        it('should render a NoteHeader', () => {
          const header = component.find('Card').find('NoteHeader');

          assert(header.exists());
          assert.equal(1, header.length);
          assert.equal(note, header.props().note);
          assert.equal(props.onDelete, header.props().onDelete);
          assert.equal(props.onEdit, header.props().onEdit);
        });

        it('should render a CardBlock with text', () => {
          const noteControl = component.find(CardText);

          assert(noteControl.exists());
          assert.equal(1, noteControl.length);
          assert.equal(note.text, noteControl.text());
        });
      });
    });

    context('in default mode with children', () => {
      const text = 'This is some additional text to be rendered';

      beforeEach(() => {
        component = mount(
          <Note {...props}>
            <span className="js-note__child">{text}</span>
          </Note>
        );
      });

      it('should render children', () => {
        const children = component.find('.js-note__child');
        assert.equal(1, children.length);
        assert.equal(text, children.text());
      });

      it('should still render a CardBlock with text', () => {
        const noteControl = component.find(CardText);

        assert(noteControl.exists());
        assert.equal(1, noteControl.length);
        assert.equal(note.text, noteControl.text());
      });
    });

    context('in deleted mode', () => {
      it('should render a single DeletedNote', () => {
        props.note.deleted = true;
        component = mount(<Note {...props} />);
        const noteControl = component.find('DeletedNote');

        assert(noteControl.exists());
        assert.equal(1, noteControl.length);
        assert.equal(note, noteControl.props().note);
        assert.equal(props.onUndelete, noteControl.props().onUndelete);
      });
    });

    context('in editing mode', () => {
      it('should render a single EditableNote', () => {
        props.note.editing = true;
        component = mount(<Note {...props} />);
        const noteControl = component.find('EditableNote');

        assert(noteControl.exists());
        assert.equal(1, noteControl.length);
        assert.equal(note, noteControl.props().note);
        assert.equal(props.onCancel, noteControl.props().onCancel);
        assert.equal(props.onChange, noteControl.props().onChange);
        assert.equal(props.onSave, noteControl.props().onSave);
      });
    });
  });
});
