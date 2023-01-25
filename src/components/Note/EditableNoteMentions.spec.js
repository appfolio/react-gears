import assert from 'assert';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import FormLabelGroup from '../Form/FormLabelGroup';
import Input from '../Input/Input';
import EditableNoteMentions from './EditableNoteMentions';

describe('<EditableNoteMentions />', () => {
  const note = {
    text: 'Hello World!',
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
      component = mount(<EditableNoteMentions {...props} />);
      const card = component.find('Card');

      assert(card.exists);
      assert.equal(1, card.length);
    });

    describe('in default mode', () => {
      beforeEach(() => {
        component = mount(<EditableNoteMentions {...props} />);
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

      describe('with mentionable users', () => {
        it('should show mentionable user dropdown on @ trigger', async () => {
          const mentionableUsers = [
            {
              key: 'John Doe',
              value: 'John.Doe',
              email: 'john.doe@appfolio.com',
            },
            {
              key: 'Mike Smith',
              value: 'Mike.Smith',
              email: 'mike.smith@appfolio.com',
            },
          ];
          props.mentionableUsers = mentionableUsers;
          props.note = 'Hey ';
          render(<EditableNoteMentions {...props} />);

          const input = screen.getByRole('textbox');
          await waitFor(() => {
            userEvent.clear(input);
            userEvent.type(input, '@');
            expect(screen.getByText('John Doe')).toBeTruthy();
            expect(screen.getByText('Mike Smith')).toBeTruthy();
          });
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
          const wrapper = mount(<EditableNoteMentions {...props} saveLabel="Send" />);
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

    describe('in default mode with children', () => {
      const text = 'This is some additional text to be rendered';

      beforeEach(() => {
        component = mount(
          <EditableNoteMentions {...props}>
            <span className="js-editable-note__child">{text}</span>
          </EditableNoteMentions>
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

    describe('with errors', () => {
      beforeEach(() => {
        props.note.errors = 'oh snap!';
        component = mount(<EditableNoteMentions {...props} />);
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

    describe('in saving mode', () => {
      beforeEach(() => {
        component = mount(<EditableNoteMentions saving {...props} />);
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
        const wrapper = mount(<EditableNoteMentions {...props} saving savingLabel="Sending..." />);
        const button = wrapper.find('.js-editable-note_save').hostNodes();

        assert(button.exists);
        assert(button.props().disabled);
        assert.equal('Sending...', button.text());
      });
    });

    describe('if note has a date', () => {
      it('should render a NoteHeader', () => {
        props.note.date = new Date();
        component = mount(<EditableNoteMentions {...props} />);
        const header = component.find('NoteHeader');

        assert.equal(1, header.length);
        assert.equal(note, header.props().note);
      });
    });
  });
});
