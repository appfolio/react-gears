import * as React from 'react';

export interface StateInputProps {
  className?: string;
  countries?: string[];
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (...args: any[]) => any;
  placeholder?: string;
  value?: string;
}

export default class StateInput extends React.Component<StateInputProps, {}> {
  render(): React.ReactNode;
}
