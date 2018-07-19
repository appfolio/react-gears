import * as React from 'react';

interface DatapairProps {
  children?: (JSX.Element | string)[];
  className?: string;
  label?: (JSX.Element | string);
  value?: string | JSX.Element;
}
declare class Datapair extends React.Component<DatapairProps, {}> { }
export default Datapair;

