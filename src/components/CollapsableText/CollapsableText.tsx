import React, { useEffect, useState } from 'react';
import Button, { type ButtonProps } from '../Button/Button';

const Toggle = ({ children, ...props }: ButtonProps) => (
  <Button color="link" size="sm" className="p-0 m-0 ms-2" {...props}>
    {children}
  </Button>
);

export interface CollapsableTextProps {
  children?: string;
  collapsed?: boolean;
  lessLabel?: React.ReactNode;
  maxLength?: number;
  moreLabel?: React.ReactNode;
}

const CollapsableText = ({
  children = '',
  collapsed: defaultCollapsed = true,
  lessLabel = 'Show Less',
  maxLength = 256,
  moreLabel = 'Show More',
}: CollapsableTextProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => setCollapsed(defaultCollapsed), [defaultCollapsed]);

  if (children.length < maxLength) {
    return children;
  }
  if (collapsed) {
    return (
      <span>
        {children.substring(0, maxLength).trim()}&hellip;{' '}
        <Toggle onClick={() => toggle()}>{moreLabel}</Toggle>
      </span>
    );
  }

  return (
    <span>
      {children} <Toggle onClick={() => toggle()}>{lessLabel}</Toggle>
    </span>
  );
};

CollapsableText.defaultProps = {
  children: '',
  collapsed: true,
  lessLabel: 'Show Less',
  maxLength: 256,
  moreLabel: 'Show More',
};

CollapsableText.displayName = 'CollapsableText';

export default CollapsableText;
