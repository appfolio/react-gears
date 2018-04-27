import * as React from 'react';
interface StepProps {
  collapse?: boolean;
  complete?: boolean;
  step?: number;
  steps?: string[];
}
declare class Step extends React.Component<StepProps, {}> { }
export default Step;
