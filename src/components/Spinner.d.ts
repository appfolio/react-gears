import * as React from 'react';

interface SpinnerProps extends Omit<React.SVGAttributes<SVGElement>, 'width' | 'height' | 'version'> {
  className?: string;
  color?: string;
  size?: string;
}
declare class Spinner extends React.Component<SpinnerProps, {}> { }
export default Spinner;
