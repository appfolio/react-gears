import React, { useState } from 'react';
import type { TooltipProps, UncontrolledTooltipProps } from 'reactstrap';
import Tooltip from './Tooltip';

interface TruncatedTextProps {
  text: string;
  targetId: string;
  charLimit: number;
  tooltip: boolean;
  placement: UncontrolledTooltipProps['placement'];
  tooltipProps: TooltipProps;
}

let count = 0;
function getID() {
  return `truncated-text-${count++}`;
}
const TruncatedText = ({
  text,
  targetId,
  charLimit = 50,
  tooltip = true,
  placement = 'top',
  tooltipProps,
}: TruncatedTextProps) => {
  const [id] = useState(targetId || getID());
  return (
    <>
      <span id={id}>
        {text && text.length > charLimit ? `${text.substring(0, charLimit).trim()}...` : text}
      </span>
      {text && text.length > charLimit && tooltip && (
        <Tooltip
          {...tooltipProps}
          placement={placement}
          target={id}
          className={`js-truncated-${id}`}
        >
          {text}
        </Tooltip>
      )}
    </>
  );
};

TruncatedText.displayName = 'TruncatedText';

export default TruncatedText;
