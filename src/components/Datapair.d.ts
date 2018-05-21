import * as React from 'react';

interface DatapairProps {
  children?: (JSX.Element | string)[];
  label?: (JSX.Element | string);
  value?: string;
}
declare class Datapair extends React.Component<DatapairProps, {}> { }
export default Datapair;

