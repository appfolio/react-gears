import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { FeedbackModal } from '../../src';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


describe('<FeedbackModal />', () => {
  let wrapper;
  let onSubmit;
  let props;
  const sandbox = sinon.sandbox.create();

  beforeEach(() => {
    onSubmit = sandbox.stub();
    props = {
      onSubmit,
    };
    wrapper = shallow(<FeedbackModal {...props} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have the correct default props', () => {
    assert.equal(wrapper.instance().props.commentIncluded, true);
    assert.equal(wrapper.instance().props.commentRequired, true);
    assert.equal(wrapper.instance().props.commentSubtitle, 'What can we do to make it even better?');
    assert.equal(wrapper.instance().props.commentPlaceholder, 'Enter your thoughts here. Thanks!');
    assert.equal(wrapper.instance().props.highRatingText, 'Very useful!');
    assert.equal(wrapper.instance().props.isOpen, false);
    assert.equal(wrapper.instance().props.lowRatingText, "Don't need it");
    assert.equal(wrapper.instance().props.modalTitle, 'Feedback');
    assert.equal(wrapper.instance().props.ratingIncluded, true);
    assert.equal(wrapper.instance().props.ratingRequired, true);
    assert.equal(wrapper.instance().props.ratingSubtitle, 'How useful is this feature to you?');
  });

  describe('#onCancel', () => {
    it('sets state isOpen to be false', () => {
      assert.equal(wrapper.state('isOpen'), false);
    });
  });

  describe('#onSubmit', () => {
    afterEach(() => {
      sandbox.restore();
    });

    context('comment is required', () => {
      beforeEach(() => {
        sandbox.stub(document, 'querySelectorAll').withArgs('input[type=radio]:checked').returns([{ dataset: { value: '5' } }]);
        sandbox.stub(document, 'getElementsByClassName').withArgs('js-comment').returns([{ value: null }]);
      });

      it('validates comment content', () => {
        wrapper.instance().onSubmit();
        assert.equal(wrapper.state('commentValidationError'), 'can\'t be blank');
      });

      it('does not submit if either validation fails', () => {
        wrapper.instance().onSubmit();
        sinon.assert.notCalled(props.onSubmit);
      });
    });

    context('comment is not required', () => {
      it('submits the result with no comment', () => {
        props.commentRequired = false;
        sandbox.stub(document, 'querySelectorAll').withArgs('input[type=radio]:checked').returns([{ dataset: { value: '5' } }]);
        sandbox.stub(document, 'getElementsByClassName').withArgs('js-comment').returns([{ value: null }]);
        wrapper = mount(<FeedbackModal {...props} />);
        wrapper.instance().onSubmit();
        sinon.assert.calledWith(props.onSubmit, { comment: null, rating: '5' });
      });
    });

    context('rating is required', () => {
      beforeEach(() => {
        sandbox.stub(document, 'querySelectorAll').withArgs('input[type=radio]:checked').returns([]);
        sandbox.stub(document, 'getElementsByClassName').withArgs('js-comment').returns([{ value: 'nothing to comment' }]);
      });

      it('validates rating', () => {
        wrapper.instance().onSubmit();
        assert.equal(wrapper.state('ratingValidationError'), 'can\'t be blank');
      });

      it('does not submit if either validation fails', () => {
        wrapper.instance().onSubmit();
        sinon.assert.notCalled(props.onSubmit);
      });
    });

    context('rating is not required', () => {
      it('submits the result with no rating', () => {
        props.ratingRequired = false;
        sandbox.stub(document, 'querySelectorAll').withArgs('input[type=radio]:checked').returns([]);
        sandbox.stub(document, 'getElementsByClassName').withArgs('js-comment').returns([{ value: 'nothing to comment' }]);
        wrapper = mount(<FeedbackModal {...props} />);
        wrapper.instance().onSubmit();
        sinon.assert.calledWith(props.onSubmit, { comment: 'nothing to comment', rating: null });
      });
    });

    it('closes the modal', () => {
      sandbox.stub(document, 'querySelectorAll').withArgs('input[type=radio]:checked').returns([{ dataset: { value: '5' } }]);
      sandbox.stub(document, 'getElementsByClassName').withArgs('js-comment').returns([{ value: 'nothing to comment' }]);
      wrapper.instance().onSubmit();
      assert.equal(wrapper.prop('isOpen'), false);
    });
  });

  describe('renders a Modal', () => {
    let modal;

    beforeEach(() => {
      modal = wrapper.find(Modal);
    });

    it('has the correct props', () => {
      assert.equal(modal.prop('isOpen'), wrapper.prop('isOpen'));
      assert.equal(modal.prop('backdrop'), true);
    });

    it('renders a ModalHeader', () => {
      const modalHeader = wrapper.find(ModalHeader);
      assert.equal(modalHeader.prop('toggle'), wrapper.instance().onCancel);
      assert.equal(modalHeader.children().first().text(), 'Feedback');
    });

    it('renders a ModalFooter', () => {
      const modalFooter = modal.find(ModalFooter);
      const buttons = modalFooter.find(Button);
      assert.equal(buttons.first().prop('onClick'), wrapper.instance().onSubmit);
      assert.equal(buttons.first().children().first().text(), 'Submit');
      assert.equal(buttons.last().prop('onClick'), wrapper.instance().onCancel);
      assert.equal(buttons.last().children().first().text(), 'Cancel');
    });

    context('rending modal body', () => {
      context('include rating', () => {
        it('renders rating subtitle', () => {
          const ratingTitle = wrapper.find('.js-rating-subtitle');
          assert.equal(ratingTitle.text(), 'How useful is this feature to you?');
        });

        it('renders 5 radio buttons', () => {
          const rating = modal.children().find(ModalBody).children().find('.js-ratings');
          const ratingBtns = rating.children().find(Input);
          assert.equal(ratingBtns.length, 5);
        });

        it('renders low rating text', () => {
          const ratingText = wrapper.find('.js-low-rating-text');
          assert.equal(ratingText.text(), "Don't need it");
        });

        it('renders high rating text', () => {
          const ratingText = wrapper.find('.js-high-rating-text');
          assert.equal(ratingText.text(), "Very useful!");
        });
      });

      context('include comment', () => {
        it('renders comment subtitle', () => {
          const ratingTitle = wrapper.find('.js-comment-subtitle')
          assert.equal(ratingTitle.text(), 'What can we do to make it even better?');
        });

        it('renders comment textarea', () => {
          const comment = modal.children().find(ModalBody).children().find('.js-comment');
          assert.equal(comment.length, 1);
        });
      });
    });
  });
});
