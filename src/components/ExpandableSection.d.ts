import * as React from 'react';

interface ExpandableSectionProps {
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
  open?: boolean;
  title: string;
}

declare class ExpandableSection extends React.Component<ExpandableSectionProps, {}> { }
export default ExpandableSection;
