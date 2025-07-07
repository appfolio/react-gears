/* eslint-disable react/no-unused-prop-types */
import classNames from 'classnames';
import React, { useState, useRef } from 'react';
import { useIntervalRef } from '../../hooks/useIntervalRef';
import Button from '../Button/Button';

function getEllipsisStyle(maxLines: number) {
  maxLines = Math.max(maxLines, 1);
  return {
    display: '-webkit-box',
    // max-height for browsers that don't support -webkit-line-clamp.
    maxHeight: `calc(1.5em * ${maxLines})`,
    overflow: 'hidden',
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: 'vertical',
  } as const;
}

type AlignToggleButton = 'start' | 'center' | 'end' | 'auto';

export interface CollapsableTextProps {
  children?: React.ReactNode;
  collapsed?: boolean;
  lessLabel?: React.ReactNode;
  moreLabel?: React.ReactNode;
  /**  @deprecated maxLength has no effect. Use maxLines instead */
  maxLength?: number;
  maxLines?: number;
  alignToggleButton?: AlignToggleButton;
}

export default function CollapsableText({
  children,
  collapsed = CollapsableText.defaultProps.collapsed,
  lessLabel = CollapsableText.defaultProps.lessLabel,
  moreLabel = CollapsableText.defaultProps.moreLabel,
  maxLines = CollapsableText.defaultProps.maxLines,
  alignToggleButton = CollapsableText.defaultProps.alignToggleButton,
}: CollapsableTextProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [hideToggle, setHideToggle] = useState(collapsed);

  // Can't easily use a resize utility here because nothing can detect when only scrollHeight changes.
  // Using an interval is not ideal, but it works.
  const checkSizeRef = useIntervalRef((el) => {
    setHideToggle(isCollapsed && el.clientHeight >= el.scrollHeight);
  }, 200);

  // If the collapsed prop changes, update the state.
  // This is bad practice, we should instead have a defaultCollapsed prop and the collapsed prop
  // should fully control the state if provided.
  // TODO: Add defaultCollapsed and onToggle props. Always respect collapsed prop unless undefined.
  const lastCollapsedProp = useRef(collapsed);
  if (lastCollapsedProp.current !== collapsed) {
    lastCollapsedProp.current = collapsed;
    setIsCollapsed(collapsed);
  }

  const textContainerStyle: React.CSSProperties = { overflowWrap: 'anywhere' };
  if (isCollapsed) {
    Object.assign(textContainerStyle, getEllipsisStyle(maxLines));
  }

  return (
    <div className="d-inline-flex flex-column align-items-start mw-100">
      <div ref={checkSizeRef} style={textContainerStyle}>
        {children}
      </div>
      {!hideToggle && (
        <Button
          color="link"
          className={classNames({
            'align-self-start': alignToggleButton === 'start',
            'align-self-center': alignToggleButton === 'center',
            'align-self-end': alignToggleButton === 'end',
            // 'auto' should center align the button on xs screen sizes and start align on sm breakpoint and up (FEE-476)
            'align-self-center align-self-sm-start': alignToggleButton === 'auto',
          })}
          onClick={() => setIsCollapsed((c) => !c)}
        >
          {isCollapsed ? moreLabel : lessLabel}
        </Button>
      )}
    </div>
  );
}

export interface CollapsableTextDefaultProps {
  collapsed: boolean;
  lessLabel: string;
  moreLabel: string;
  maxLines: number;
  alignToggleButton: AlignToggleButton;
}

const defaultProps: CollapsableTextDefaultProps = {
  collapsed: true,
  lessLabel: 'Show Less',
  moreLabel: 'Show More',
  maxLines: 2,
  alignToggleButton: 'start',
};

CollapsableText.defaultProps = defaultProps;
