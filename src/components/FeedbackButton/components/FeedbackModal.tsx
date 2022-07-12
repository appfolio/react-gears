import React, { FC, ReactNode, useEffect, useState } from 'react';
import { usePrevious } from 'react-use';
import Button from '../../Button/Button';
import ButtonToolbar from '../../Button/ButtonToolbar';
import Modal from '../../Modal/Modal';
import ModalBody from '../../Modal/ModalBody';
import ModalFooter from '../../Modal/ModalFooter';
import ModalHeader from '../../Modal/ModalHeader';
import FeedbackModalBody from './FeedbackModalBody';

export interface FeedbackModalProps {
  cancelButtonText: string;
  commentIncluded: boolean;
  commentPlaceholder: string;
  commentRequired: boolean;
  commentSubtitle: ReactNode;
  highRatingText: string;
  isOpen: boolean;
  lowRatingText: string;
  modalTitle: ReactNode;
  onCancel: () => void;
  onSubmit: (opts: { rating: number | null; comment: string | null }) => void;
  pleaseWaitButtonText: string;
  ratingIncluded: boolean;
  ratingRequired: boolean;
  ratingSubtitle: ReactNode;
  submitButtonText: string;
  backdrop: boolean;
}

const FeedbackModal: FC<FeedbackModalProps> = (props: FeedbackModalProps) => {
  const {
    cancelButtonText,
    commentIncluded,
    commentPlaceholder,
    commentRequired,
    commentSubtitle,
    highRatingText,
    isOpen,
    lowRatingText,
    modalTitle,
    onCancel,
    onSubmit,
    pleaseWaitButtonText,
    ratingIncluded,
    ratingRequired,
    ratingSubtitle,
    submitButtonText,
    ...otherProps
  } = props;

  const wasOpen = usePrevious(isOpen);

  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [ratingValidationError, setRatingValidationError] = useState<string | null>(null);
  const [commentValidationError, setCommentValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (wasOpen && !isOpen) {
      setRatingValidationError(null);
      setCommentValidationError(null);
      setSubmitting(false);
    }
  }, [isOpen, wasOpen]);

  const cancel = () => {
    onCancel();
    setRating(null);
    setComment(null);
  };

  const submit = () => {
    let error = false;
    let commentErrorMessage = null;
    let ratingErrorMessage = null;
    if (!rating && ratingRequired) {
      ratingErrorMessage = "can't be blank";
      error = true;
    }
    if (!comment && commentRequired) {
      commentErrorMessage = "can't be blank";
      error = true;
    }

    setRatingValidationError(ratingErrorMessage);
    setCommentValidationError(commentErrorMessage);

    if (error) {
      return;
    }

    setSubmitting(true);
    onSubmit({ rating, comment });
  };

  return (
    <Modal isOpen={isOpen} toggle={cancel} {...otherProps}>
      <ModalHeader toggle={cancel}>{modalTitle}</ModalHeader>
      <ModalBody>
        <FeedbackModalBody
          highRatingText={highRatingText}
          lowRatingText={lowRatingText}
          commentIncluded={commentIncluded}
          commentPlaceholder={commentPlaceholder}
          commentRequired={commentRequired}
          commentSubtitle={commentSubtitle}
          commentValidationError={commentValidationError}
          ratingIncluded={ratingIncluded}
          ratingRequired={ratingRequired}
          ratingSubtitle={ratingSubtitle}
          ratingValidationError={ratingValidationError}
          setRating={setRating}
          setComment={setComment}
        />
      </ModalBody>
      <ModalFooter>
        <ButtonToolbar>
          <Button disabled={submitting} color="primary" onClick={submit}>
            {submitting ? pleaseWaitButtonText : submitButtonText}
          </Button>
          <Button disabled={submitting} onClick={cancel}>
            {cancelButtonText}
          </Button>
        </ButtonToolbar>
      </ModalFooter>
    </Modal>
  );
};

export default FeedbackModal;
