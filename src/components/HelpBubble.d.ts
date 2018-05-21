import Omit from './TypeHelpers/Omit';
import PopoverProps from './TypeHelpers/props/Popover';
import * as React from 'react';

interface HelpBubbleProps extends Omit<PopoverProps, 'isOpen' | 'toggle' | 'target'> {
  title: string;
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
}
declare class HelpBubble extends React.Component<HelpBubbleProps, {}> { }
export default HelpBubble;
