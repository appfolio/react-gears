import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { EditableNote, FormLabelGroup, Input } from '../../src';

describe('<EditableNote />', () => {
  const note = {
    text: 'Hello World!'
  };
  let component;
  let props;

  beforeEach(() => {
    const onCancel = sinon.spy();
    const onChange = sinon.spy();
    const onSave = sinon.spy();
    props = { note, onCancel, onChange, onSave };
  });

  describe('rendering', () => {
    it('should render a card', () => {
      component = mount(<EditableNote {...props} />);
      const card = component.find('Card');

      assert(card.exists);
      assert.equal(1, card.length);
    });

    context('in default mode', () => {
      beforeEach(() => {
        component = mount(<EditableNote {...props} />);
      });

      describe('should render a text input', () => {
        it('should render with text', () => {
          const input = component.find(Input);

          assert(input.exists());
          assert.equal(1, input.length);
          assert.equal(note.text, input.text());
          assert(!input.props().disabled);
        });

        it('should call onChange on text change', () => {
          const event = { target: { value: 'Yikes!' } };
          component.find(Input).simulate('change', event);
          assert(props.onChange.calledOnce);
          assert(props.onChange.calledWith(sinon.match(event), note));
        });
      });

      describe('should render a cancel button', () => {
        it('should call onCancel on click', () => {
          component.find('.js-editable-note_cancel').hostNodes().simulate('click');
          assert(props.onCancel.calledOnce);
          assert(props.onCancel.calledWith(note));
        });
      });

      describe('should render a save button', () => {
        it('should render with text', () => {
          const button = component.find('.js-editable-note_save').hostNodes();

          assert(button);
          assert(!button.props().disabled);
        });

        it('should render with custom text', () => {
          const wrapper = mount(<EditableNote {...props} saveLabel="Send" />);
          const button = wrapper.find('.js-editable-note_save').hostNodes();

          assert.equal(button.text(), 'Send');
        });

        it('should call onSave on click', () => {
          component.find('.js-editable-note_save').hostNodes().simulate('click');
          assert(props.onSave.calledOnce);
          assert(props.onSave.calledWith(note));
        });
      });
    });

    context('in default mode with children', () => {
      const text = 'This is some additional text to be rendered';

      beforeEach(() => {
        component = mount(
          <EditableNote {...props}>
            <span className="js-editable-note__child">{text}</span>
          </EditableNote>
        );
      });

      it('renders children', () => {
        const children = component.find('.js-editable-note__child');
        assert.equal(1, children.length);
        assert.equal(text, children.text());
      });

      it('should still render input area', () => {
        const input = component.find(Input);

        assert(input.exists);
        assert.equal(1, input.length);
      });

      it('should still render cancel button', () => {
        const button = component.find('.js-editable-note_cancel').hostNodes();

        assert(button.exists);
      });

      it('should still render save button', () => {
        const button = component.find('.js-editable-note_save');

        assert(button.exists);
      });
    });

    context('with errors', () => {
      beforeEach(() => {
        props.note.errors = 'oh snap!';
        component = mount(<EditableNote {...props} />);
      });

      it('should render form group with errors', () => {
        const group = component.find(FormLabelGroup);

        assert(group.exists);
        assert.equal(1, group.length);
        assert.equal('oh snap!', group.props().feedback);
      });

      it('should render input state as invalid', () => {
        const input = component.find(Input);

        assert.equal(input.props().invalid, true);
      });
    });

    context('in saving mode', () => {
      beforeEach(() => {
        component = mount(<EditableNote saving {...props} />);
      });

      it('should render text input disabled', () => {
        const input = component.find(Input);

        assert(input.exists);
        assert(input.props().disabled);
      });

      it('should render cancel button disabled', () => {
        const button = component.find('.js-editable-note_cancel').hostNodes();

        assert(button.exists);
        assert(button.props().disabled);
      });

      it('should render save button disabled with alternate text', () => {
        const button = component.find('.js-editable-note_save').hostNodes();

        assert(button.exists);
        assert(button.props().disabled);
        assert.equal('Saving...', button.text());
      });

      it('should render save button disabled with custom text', () => {
        const wrapper = mount(<EditableNote {...props} saving savingLabel="Sending..." />);
        const button = wrapper.find('.js-editable-note_save').hostNodes();

        assert(button.exists);
        assert(button.props().disabled);
        assert.equal('Sending...', button.text());
      });
    });

    context('if note has a date', () => {
      it('should render a NoteHeader', () => {
        props.note.date = new Date();
        component = mount(<EditableNote {...props} />);
        const header = component.find('NoteHeader');

        assert.equal(1, header.length);
        assert.equal(note, header.props().note);
      });
    });
  });
});
