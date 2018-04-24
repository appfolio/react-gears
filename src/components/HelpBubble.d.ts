import Omit from './TypeHelpers/Omit';
import PopoverProps from './TypeHelpers/props/Popover';

interface HelpBubblePropTypes extends Omit<PopoverProps, 'isOpen' | 'toggle' | 'target'> {
  title: string;
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
}
declare const HelpBubble: React.StatelessComponent<HelpBubblePropTypes>;
export default HelpBubble;
