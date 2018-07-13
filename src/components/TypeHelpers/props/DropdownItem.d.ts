import CSSModule from './CSSModule';

export default interface DropdownItemProps {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}
