import React, { FC, ReactNode } from 'react';
import Label from '../../Label/Label';

export interface FeedbackModalSubtitleProps {
  visible: boolean;
  required: boolean;
  text: ReactNode;
  labelClassNames: string;
}

const FeedbackModalSubtitle: FC<FeedbackModalSubtitleProps> = ({
  visible,
  required,
  text,
  labelClassNames,
}: FeedbackModalSubtitleProps) => {
  if (!visible) {
    return null;
  }

  const labelClass = `mb-2 fw-bold ${labelClassNames}`;
  return (
    <span>
      <Label>
        <span className={labelClass}>
          {text}
          {required && <span className="text-danger ps-1">*</span>}
        </span>
      </Label>
    </span>
  );
};

export default FeedbackModalSubtitle;
