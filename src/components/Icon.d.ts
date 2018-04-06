interface CSSModule {
  [name: string]: string;
}

interface IconPropTypes {
  ariaLabel?: string;
  border?: boolean;
  className?: string;
  cssModule?: CSSModule;
  fixedWidth?: boolean;
  flip?: 'horizontal' | 'vertical';
  inverse?: boolean;
  name: string;
  pulse?: boolean;
  rotate?: 90 | 180 | 270;
  size?: 'lg' | '2x' | '3x' | '4x' | '5x';
  spin?: boolean;
  stack?: '1x' | '2x';
  tag?: string;
}

declare const Icon: React.StatelessComponent<IconPropTypes>;
export default Icon;
