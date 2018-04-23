import Omit from '../util/Omit';
import PopoverProps from './props/Popover';

interface HelpBubblePropTypes extends Omit<PopoverProps, 'isOpen' | 'toggle' | 'target'> {
  title: string;
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
}
declare const HelpBubble: React.StatelessComponent<HelpBubblePropTypes>;
export default HelpBubble;
