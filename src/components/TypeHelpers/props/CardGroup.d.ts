import CSSModule from './CSSModule';

export default interface CardGroupProps extends React.HTMLProps<HTMLDivElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}
