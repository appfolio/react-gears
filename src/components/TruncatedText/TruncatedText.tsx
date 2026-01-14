import React from 'react';
import { TooltipProps, UncontrolledTooltipProps } from 'reactstrap';
import { useUniqueId } from '../../util/uniqueId';
import Tooltip from '../Tooltip/Tooltip';

interface TruncatedTextProps {
  text: string;
  targetId: string;
  charLimit: number;
  tooltip: boolean;
  placement: UncontrolledTooltipProps['placement'];
  tooltipProps: TooltipProps;
}

const TruncatedText = ({
  text,
  targetId,
  charLimit = 50,
  tooltip = true,
  placement = 'top',
  tooltipProps,
}: TruncatedTextProps) => {
  const generatedId = useUniqueId('truncated-text-');
  const id = targetId || generatedId;
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
