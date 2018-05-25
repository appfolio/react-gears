import React from 'react';
import assert from 'assert';
import { HelpBubble, Notes } from '../../src';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Notes />', () => {
  const sandbox = sinon.sandbox.create();
  const notes = [
    { date: new Date(), text: 'Alpha' },
    { date: new Date(), text: 'Bravo' },
    { date: new Date(), text: 'Charlie' },
    { date: new Date(), text: 'Delta' }
  ];
  let props;

  beforeEach(() => {
    props = { notes };
  });

  afterEach(() => sandbox.restore());

  describe('rendering', () => {
    it('should render correctly', () => {
      const component = mount(<Notes notes={notes} />);
      assert(component);
      assert.equal(component.find('Note').nodes.length, notes.length);
    });

    describe('renders a header', () => {
      it('renders a single header', () => {
        const wrapper = mount(<Notes {...props} />);
        const header = wrapper.find('h3');

        assert(header.exists());
        assert.equal(1, header.length);
      });

      context('with help', () => {
        it('renders a help bubble with default help text', () => {
          const wrapper = shallow(<Notes {...props} />);
          const helpBubble = wrapper.find('h3').find(HelpBubble);

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
          const helpBubble = wrapper.find('h3').find(HelpBubble);

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
          const titleNode = wrapper.find('h3');

          assert.equal('Notes', titleNode.text());

          const helpBubble = titleNode.find(HelpBubble);
          assert(!helpBubble.exists());
        });
      });
    });
  });
});
