import classnames from 'classnames';
import React, { FC, ReactNode } from 'react';
import Input from '../../Input/Input';
import FeedbackModalRating from './FeedbackModalRating';
import FeedbackModalSubtitle from './FeedbackModalSubtitle';

interface FeedbackModalBodyProps {
  highRatingText: string;
  lowRatingText: string;
  commentIncluded: boolean;
  commentPlaceholder: string;
  commentRequired: boolean;
  commentSubtitle: ReactNode;
  commentValidationError: string | null;
  ratingIncluded: boolean;
  ratingRequired: boolean;
  ratingSubtitle: ReactNode;
  ratingValidationError: string | null;
  setRating(rating: number): void;
  setComment(comment: string): void;
}

const FeedbackModalBody: FC<FeedbackModalBodyProps> = ({
  commentIncluded,
  commentPlaceholder,
  commentRequired,
  commentSubtitle,
  commentValidationError,
  highRatingText,
  lowRatingText,
  ratingIncluded,
  ratingRequired,
  ratingSubtitle,
  ratingValidationError,
  setRating,
  setComment,
}) => (
  <div>
    <FeedbackModalSubtitle
      visible={ratingIncluded}
      required={ratingRequired}
      text={ratingSubtitle}
      labelClassNames={classnames({ 'js-rating-subtitle': true })}
    />
    {ratingIncluded && (
      <FeedbackModalRating
        highRatingText={highRatingText}
        lowRatingText={lowRatingText}
        ratingValidationError={ratingValidationError}
        setRating={setRating}
      />
    )}
    <FeedbackModalSubtitle
      visible={commentIncluded}
      required={commentRequired}
      text={commentSubtitle}
      labelClassNames={classnames({ 'js-rating-subtitle': true })}
    />
    {commentIncluded && (
      <Input
        className="js-comment"
        placeholder={commentPlaceholder}
        rows={5}
        type="textarea"
        onChange={(e) => setComment(e.target.value)}
      />
    )}
    <span className="text-danger">{commentValidationError}</span>
  </div>
);

export default FeedbackModalBody;
