import React from 'react';
import assert from 'assert';
import { BlockPanel, Button, HelpBubble, Note, Notes } from '../../src';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Notes />', () => {
  const sandbox = sinon.sandbox.create();
  const notes = [
    { id: '1', date: new Date(), text: 'Alpha' },
    { id: '2', date: new Date(), text: 'Bravo' },
    { id: '3', date: new Date(), text: 'Charlie' },
    { id: '4', date: new Date(), text: 'Delta' }
  ];
  let props;

  function DummyNoteControl(note) {
    return <span>{note.text}</span>;
  }

  beforeEach(() => {
    props = { notes };
  });

  afterEach(() => sandbox.restore());

  describe('rendering', () => {
    it('renders a single block panel', () => {
      const wrapper = mount(<Notes {...props} />);
      const blockPanel = wrapper.find(BlockPanel);

      assert(blockPanel.exists());
      assert.equal(1, blockPanel.length);
    });

    context('with help', () => {
      it('renders a help bubble with default help text', () => {
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);
        const blockProps = blockPanel.props();

        const titleNode = shallow(blockProps.title);
        const helpBubble = titleNode.find(HelpBubble);

        assert(helpBubble.exists());
        assert.equal('Notes', helpBubble.props().title);
        assert.equal('right', helpBubble.props().placement);
        assert.equal(
          'Make notes on several different pages. Notes are private to property managers.',
          helpBubble.props().children
        );
      });

      it('renders a help bubble with full help text when onDownload prop is specified', () => {
        props.onDownload = sandbox.stub();
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);
        const blockProps = blockPanel.props();

        const titleNode = shallow(blockProps.title);
        const helpBubble = titleNode.find(HelpBubble);

        assert(helpBubble.exists());
        assert.equal('Notes', helpBubble.props().title);
        assert.equal('right', helpBubble.props().placement);
        assert.equal(
          'Make notes on several different pages. Notes are private to property managers.  ' +
          'The \'Download PDF\' button will download all the notes on a page as a PDF to your ' +
          'computer.',
          helpBubble.props().children
        );
      });
    });

    context('without help', () => {
      it('renders no help bubble when help prop is empty', () => {
        props.help = '';
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);
        const blockProps = blockPanel.props();

        const titleNode = mount(blockProps.title);
        assert.equal('Notes', titleNode.text());

        const helpBubble = titleNode.find(HelpBubble);
        assert(!helpBubble.exists());
      });
    });

    context('without onAdd or onDownload callbacks', () => {
      it('renders no controls in the block panel', () => {
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);

        const controls = blockPanel.props().controls;
        assert.equal(0, controls.length);
      });
    });

    context('with onAdd prop', () => {
      it('renders an Add Note button', () => {
        props.onAdd = sandbox.stub();
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);

        const controls = blockPanel.props().controls;
        assert.equal(1, controls.length);

        const control = mount(controls[0]);
        assert.equal(Button, control.type());
        assert.equal('Add Note', control.text());
        assert.equal('secondary', control.props().color);
        assert.equal(props.onAdd, control.props().onClick);
      });
    });

    context('with onDownload prop', () => {
      it('renders a Download PDF button', () => {
        props.onDownload = sandbox.stub();
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);

        const controls = blockPanel.props().controls;
        assert.equal(1, controls.length);

        const control = mount(controls[0]);
        assert.equal(Button, control.type());
        assert.equal('Download PDF', control.text());
        assert.equal('secondary', control.props().color);
        assert.equal(props.onDownload, control.props().onClick);
      });
    });

    context('with onAdd and onDownload props', () => {
      it('renders Download PDF and Add Note buttons', () => {
        props.onAdd = sandbox.stub();
        props.onDownload = sandbox.stub();
        const wrapper = shallow(<Notes {...props} />);
        const blockPanel = wrapper.find(BlockPanel);

        const controls = blockPanel.props().controls;
        assert.equal(2, controls.length);

        const downloadControl = mount(controls[0]);
        assert.equal(Button, downloadControl.type());
        assert.equal('Download PDF', downloadControl.text());
        assert.equal('secondary', downloadControl.props().color);
        assert.equal(props.onDownload, downloadControl.props().onClick);

        const addControl = mount(controls[1]);
        assert.equal(Button, addControl.type());
        assert.equal('Add Note', addControl.text());
        assert.equal('secondary', addControl.props().color);
        assert.equal(props.onAdd, addControl.props().onClick);
      });
    });

    describe('renders a list of notes', () => {
      it('renders a Note for each note in notes prop', () => {
        props.onEdit = sandbox.stub();
        props.onDelete = sandbox.stub();
        props.onUndelete = sandbox.stub();
        const wrapper = shallow(<Notes {...props} />);

        const noteCards = wrapper.find(Note);
        assert.equal(4, noteCards.length);

        for (let i = 0; i < noteCards.length; ++i) {
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
          assert.equal(`${i + 1}`, noteCards.at(i).props().note.text);
        }
      });
    });
  });
});
