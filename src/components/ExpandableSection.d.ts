import * as React from 'react';

interface ExpandableSectionProps {
  children?: ReactNode;
  className?: string;
  open?: boolean;
  title: string;
}

declare class ExpandableSection extends React.Component<ExpandableSectionProps, {}> { }
export default ExpandableSection;
