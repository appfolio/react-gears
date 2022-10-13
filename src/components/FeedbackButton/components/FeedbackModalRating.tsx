import React, { FC } from 'react';
import Input from '../../Input/Input';

interface FeedbackModalRatingProps {
  highRatingText: string;
  lowRatingText: string;
  ratingValidationError: string | null;
  setRating(rating: number): void;
}

const FeedbackModalRating: FC<FeedbackModalRatingProps> = ({
  highRatingText,
  lowRatingText,
  ratingValidationError,
  setRating,
}) => (
  <div data-testid="feedback-modal-rating">
    <div className="mb-5 text-center">
      <div className="d-flex mb-2 mx-3 justify-content-between">
        <span className="js-low-rating-text">{lowRatingText}</span>
        <span className="js-high-rating-text">{highRatingText}</span>
      </div>
      <div className="d-flex justify-content-around mb-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <div data-testid={`rating-${rating}`} key={`rating-${rating}`}>
            <div>{rating}</div>
            <Input
              className="ms-auto mt-2"
              type="radio"
              name="rating"
              data-value={rating}
              onClick={() => setRating(rating)}
            />
          </div>
        ))}
      </div>
    </div>
    <span className="text-danger">{ratingValidationError}</span>
  </div>
);

export default FeedbackModalRating;
