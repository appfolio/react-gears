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
  children: React.ReactNode;
  height?: string | number;
  theme?: Theme;
}
declare class ScrollContainer extends React.Component<Props, {}> { }
export default ScrollContainer;
