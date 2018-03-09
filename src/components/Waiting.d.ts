interface WaitingPropTypes {
  children: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
  isOpen?: boolean;
  title?: string;
}
declare const Waiting: React.StatelessComponent<WaitingPropTypes>;
export default Waiting;
