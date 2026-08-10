import React, { FC, ReactNode, useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import FeedbackModal from './components/FeedbackModal';

export interface FeedbackFormData {
  rating: number | null;
  comment: string | null;
}

export interface FeedbackButtonProps {
  backdrop?: boolean;
  block?: boolean;
  cancelButtonText?: string;
  children?: ReactNode;
  className?: string;
  color?: string;
  commentIncluded?: boolean;
  commentPlaceholder?: string;
  commentRequired?: boolean;
  commentSubtitle?: ReactNode;
  disabled?: boolean;
  doSubmit: (form: FeedbackFormData) => Promise<void>;
  highRatingText?: string;
  lowRatingText?: string;
  modalTitle?: ReactNode;
  outline?: boolean;
  pleaseWaitButtonText?: string;
  ratingIncluded?: boolean;
  ratingRequired?: boolean;
  ratingSubtitle?: ReactNode;
  size?: string;
  submitButtonText?: string;
}

export interface RequiredFeedbackButtonProps {
  backdrop: boolean;
  block?: boolean;
  cc?: string[];
  children?: ReactNode;
  className?: string;
  color: string;
  disabled?: boolean;
  doSubmit: (form: FeedbackFormData) => Promise<void>;
  feature: string;
  modalTitle?: ReactNode;
  outline: boolean;
  recipient: string;
  size?: string;
  cancelButtonText: string;
  commentIncluded: boolean;
  commentPlaceholder: string;
  commentRequired: boolean;
  commentSubtitle: ReactNode;
  highRatingText: string;
  lowRatingText: string;
  pleaseWaitButtonText: string;
  ratingIncluded: boolean;
  ratingRequired: boolean;
  ratingSubtitle: ReactNode;
  submitButtonText: string;
}

const defaultProps = {
  backdrop: false,
  cancelButtonText: 'Cancel',
  color: 'primary',
  commentIncluded: true,
  commentPlaceholder: 'Please give as much detail as you can. Thanks!',
  commentRequired: true,
  commentSubtitle: 'How could we improve the way this works for you?',
  highRatingText: 'Very satisfied',
  lowRatingText: 'Not satisfied at all',
  modalTitle: 'Give Feedback',
  outline: true,
  pleaseWaitButtonText: 'Please Wait...',
  ratingIncluded: true,
  ratingRequired: true,
  ratingSubtitle: 'So far, how satisfied are you with this feature?',
  submitButtonText: 'Send',
};

const FeedbackButton: FC<FeedbackButtonProps> = ({
  backdrop = defaultProps.backdrop,
  block,
  children,
  className,
  color = defaultProps.color,
  disabled,
  doSubmit,
  modalTitle = defaultProps.modalTitle,
  outline = defaultProps.outline,
  size,
  cancelButtonText = defaultProps.cancelButtonText,
  commentIncluded = defaultProps.commentIncluded,
  commentPlaceholder = defaultProps.commentPlaceholder,
  commentRequired = defaultProps.commentRequired,
  commentSubtitle = defaultProps.commentSubtitle,
  highRatingText = defaultProps.highRatingText,
  lowRatingText = defaultProps.lowRatingText,
  pleaseWaitButtonText = defaultProps.pleaseWaitButtonText,
  ratingIncluded = defaultProps.ratingIncluded,
  ratingRequired = defaultProps.ratingRequired,
  ratingSubtitle = defaultProps.ratingSubtitle,
  submitButtonText = defaultProps.submitButtonText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmitClick = async ({
    rating,
    comment,
  }: {
    rating: number | null;
    comment: string | null;
  }) => {
    const form: FeedbackFormData = {
      rating,
      comment,
    };

    try {
      await doSubmit(form);
    } catch (e) {
      setIsOpen(false);
      throw e;
    }

    setIsOpen(false);
  };

  return (
    <>
      <Button
        block={block}
        disabled={disabled}
        size={size}
        className={className}
        outline={outline}
        onClick={() => setIsOpen(true)}
        color={color}
      >
        {children || (
          <span className="fw-bold text-uppercase">
            <Icon name="envelope" className="me-2" />
            Feedback
          </span>
        )}
      </Button>
      <FeedbackModal
        isOpen={isOpen}
        backdrop={backdrop}
        onSubmit={onSubmitClick}
        onCancel={() => setIsOpen(false)}
        modalTitle={modalTitle}
        cancelButtonText={cancelButtonText}
        commentIncluded={commentIncluded}
        commentPlaceholder={commentPlaceholder}
        commentRequired={commentRequired}
        commentSubtitle={commentSubtitle}
        highRatingText={highRatingText}
        lowRatingText={lowRatingText}
        pleaseWaitButtonText={pleaseWaitButtonText}
        ratingIncluded={ratingIncluded}
        ratingRequired={ratingRequired}
        ratingSubtitle={ratingSubtitle}
        submitButtonText={submitButtonText}
      />
    </>
  );
};

export default FeedbackButton;
