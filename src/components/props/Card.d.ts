import CSSModule from './CSSModule';

export default interface Props {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
}


