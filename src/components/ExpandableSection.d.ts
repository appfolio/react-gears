import * as React from 'react';

interface ExpandableSectionProps {
  className?: string;
  open?: boolean;
  title: string;
}

declare class ExpandableSection extends React.Component<ExpandableSectionProps, {}> { }
export default ExpandableSection;
