import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Note, Notes } from '../../src';

describe('<Notes />', () => {
  const sandbox = sinon.createSandbox();
  const notes = [
    { id: '1', date: new Date(), text: 'Alpha' },
    { id: '2', date: new Date(), text: 'Bravo' },
    { id: '3', date: new Date(), text: 'Charlie' },
    { id: '4', date: new Date(), text: 'Delta' },
  ];
  let props;

  const DummyNoteControl = (note) => <span>{note.text}</span>;

  beforeEach(() => {
    props = { notes };
  });

  afterEach(() => sandbox.restore());

  describe('rendering', () => {
    describe('renders a list of notes', () => {
      it('renders a Note for each note in notes prop', () => {
        props.onEdit = sandbox.stub();
        props.onDelete = sandbox.stub();
        props.onUndelete = sandbox.stub();
        const wrapper = shallow(<Notes {...props} />);

        const noteCards = wrapper.find(Note);
        assert.equal(4, noteCards.length);

        for (let i = 0; i < noteCards.length; ++i) {
          // eslint-disable-line no-plusplus
          assert.equal(notes[i], noteCards.at(i).props().note);
          assert.equal(props.onEdit, noteCards.at(i).props().onEdit);
          assert.equal(props.onDelete, noteCards.at(i).props().onDelete);
          assert.equal(props.onUndelete, noteCards.at(i).props().onUndelete);
          assert.equal(props.noteControl, noteCards.at(i).props().noteControl);
        }
      });

      it('renders a Note for each child, ignoring notes prop if children are specified', () => {
        props.onEdit = sandbox.stub();
        props.onDelete = sandbox.stub();
        props.onUndelete = sandbox.stub();
        const wrapper = mount(
          <Notes {...props}>
            <DummyNoteControl note={{ text: '1' }} />
            <DummyNoteControl note={{ text: '2' }} />
            <DummyNoteControl note={{ text: '3' }} />
          </Notes>
        );

        const noteCards = wrapper.find(DummyNoteControl);
        assert.equal(3, noteCards.length);

        for (let i = 0; i < noteCards.length; ++i) {
          // eslint-disable-line no-plusplus
          assert.equal(`${i + 1}`, noteCards.at(i).props().note.text);
        }
      });
    });
  });
});
