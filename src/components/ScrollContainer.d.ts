import Omit from './TypeHelpers/Omit';
import * as React from 'react';

type Theme = {
  overflowTop?: string,
  overflowBottom?: string,
  overflowLeft?: string,
  overflowRight?: string
}

interface Props extends
  Omit<React.HTMLProps<HTMLDivElement>, 'className'>{
  className?: string;
  children: (JSX.Element | string) | (JSX.Element | string)[];
  height?: string | number;
  theme?: Theme;
}
declare class ScrollContainer extends React.Component<Props, {}> { }
export default ScrollContainer;
