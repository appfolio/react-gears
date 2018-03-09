interface CSSModule {
  [name: string]: string;
}

interface IconPropTypes {
  ariaLabel?: string;
  border?: boolean;
  className?: string;
  cssModule?: CSSModule;
  fixedWidth?: boolean;
  flip?: boolean;
  inverse?: boolean;
  name: string;
  pulse?: boolean;
  rotate?: number;
  size?: string;
  spin?: boolean;
  stack?: string;
  tag?: string;
}

declare const Icon: React.StatelessComponent<IconPropTypes>;
export default Icon;
