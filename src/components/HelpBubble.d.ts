interface HelpBubblePropTypes {
  title: string;
  children: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
  placement: string; // TODO: update once we have Popover
}
declare const HelpBubble: React.StatelessComponent<HelpBubblePropTypes>;
export default HelpBubble;
