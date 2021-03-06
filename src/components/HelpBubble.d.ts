import { PopoverProps } from 'reactstrap/lib/Popover';
import * as React from 'react';

interface HelpBubbleProps extends Omit<PopoverProps, 'isOpen' | 'toggle' | 'target'> {
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
declare class HelpBubble extends React.Component<HelpBubbleProps, {}> { }
export default HelpBubble;
