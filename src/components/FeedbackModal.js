import React, { Component } from 'react';
import { Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button } from '../';
import classnames from 'classnames';

export default class FeedbackModal extends Component {
  static propTypes = {
    commentIncluded: React.PropTypes.bool,
    commentPlaceholder: React.PropTypes.string,
    commentRequired: React.PropTypes.bool,
    commentSubtitle: React.PropTypes.string,
    highRatingText: React.PropTypes.string,
    isOpen: React.PropTypes.bool.isRequired,
    lowRatingText: React.PropTypes.string,
    modalTitle: React.PropTypes.string,
    onSubmit: React.PropTypes.func.isRequired,
    ratingIncluded: React.PropTypes.bool,
    ratingRequired: React.PropTypes.bool,
    ratingSubtitle: React.PropTypes.string,
  };

  static defaultProps = {
    commentIncluded: true,
    commentRequired: true,
    commentSubtitle: 'What can we do to make it even better?',
    commentPlaceholder: 'Enter your thoughts here. Thanks!',
    highRatingText: 'Very useful!',
    isOpen: false,
    lowRatingText: "Don't need it",
    modalTitle: 'Feedback',
    ratingIncluded: true,
    ratingRequired: true,
    ratingSubtitle: 'How useful is this feature to you?',
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      ratingValidationError: null,
      commentValidationError: null,
    };
  }

  onCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  onSubmit = () => {
    const rating = document.querySelectorAll('input[type=radio]:checked')[0];
    const comment = document.getElementsByClassName('js-comment')[0].value;
    let error = false;
    let commentErrorMessage = null;
    let ratingErrorMessage = null;
    if (!rating && this.props.ratingRequired) {
      ratingErrorMessage = 'can\'t be blank';
      error = true;
    }
    if (!comment && this.props.commentRequired) {
      commentErrorMessage = 'can\'t be blank';
      error = true;
    }
    this.setState({
      commentValidationError: commentErrorMessage,
      ratingValidationError: ratingErrorMessage,
    });
    if (error) {
      return;
    }
    const ratingValue = rating ? rating.dataset.value : null;
    this.props.onSubmit({ rating: ratingValue, comment });
    this.setState({ isOpen: false });
  };

  renderRating() {
    const { highRatingText, lowRatingText } = this.props;

    return (
      <div className='js-ratings'>
        <div className='mb-5'>
          <div className='d-flex mb-2 mx-3 justify-content-between'>
            <span className='js-low-rating-text font-italic'>{lowRatingText}</span>
            <span className='js-high-rating-text font-italic'>{highRatingText}</span>
          </div>
          <div className='d-flex justify-content-around mb-2'>
            {[1, 2, 3, 4, 5].map((rating) => {
              return (
                <div key={`rating-${rating}`}>
                  <div>{rating}</div>
                  <Input className='ml-auto mt-2' type='radio' name='rating' data-value={rating} />
                </div>
              );
            })}
          </div>
        </div>
        <span className='text-danger'>{this.state.ratingValidationError}</span>
      </div>
    );
  }

  renderSubtitle(included, required, text, type) {
    let result;
    if (included) {
      const labelClass = `mb-2 font-weight-bold js-${type}-subtitle ${classnames({ 'text-danger': this.state[`${type}ValidationError`] })}`;
      result = (
        <span>
          <label className={labelClass}>{text}</label>
          <span className='text-danger'>&nbsp;*</span>
        </span>
      );
    }
    return result;
  }

  renderBody() {
    const { commentIncluded, commentPlaceholder, commentRequired, commentSubtitle, ratingIncluded, ratingRequired, ratingSubtitle } = this.props;

    return (
      <div>
        {this.renderSubtitle(ratingIncluded, ratingRequired, ratingSubtitle, 'rating')}
        {ratingIncluded && this.renderRating()}
        {this.renderSubtitle(commentIncluded, commentRequired, commentSubtitle, 'comment')}
        {commentIncluded && <Input className='js-comment' placeholder={commentPlaceholder} rows={5} type='textarea' />}
        <span className='text-danger'>{this.state.commentValidationError}</span>
      </div>
    );
  }

  render() {
    const { modalTitle } = this.props;

    return (
      <Modal isOpen={this.state.isOpen} backdrop>
        <ModalHeader toggle={this.onCancel}>
          {modalTitle}
        </ModalHeader>
        <ModalBody>
          {this.renderBody()}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onSubmit}>
            Submit
          </Button>
          <Button onClick={this.onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
