import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface InfoBoxProps extends
  Omit<React.HTMLProps<HTMLDivElement>, 'className'>{
  className?: string;
  color?: string;
  children: ReactNode;
  icon?: string;
  title?: string;
  vertical: boolean;
}
declare class InfoBox extends React.Component<InfoBoxProps, {}> { }
export default InfoBox;
