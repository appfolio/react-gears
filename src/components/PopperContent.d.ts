import React from 'react';
type Target = string | ((...args: any[]) => any) | Element | { current: any };
type Tag = ((...args: any[]) => any) | string | React.Component;
interface PopperContentProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  popperClassName?: string;
  placement?: string;
  placementPrefix?: string;
  arrowClassName?: string;
  hideArrow?: boolean;
  tag?: Tag | Tag[];
  isOpen: boolean;
  cssModule?: object;
  offset?: string | number;
  fallbackPlacement?: string | any[];
  flip?: boolean;
  container?: Target;
  target: Target;
  modifiers?: object;
  boundariesElement?: string | Element;
  onClosed?: (...args: any[]) => any;
  fade?: boolean;
  transition?: any;
}

declare class PopperContent extends React.Component<PopperContentProps, {}> {}
export default PopperContent;
