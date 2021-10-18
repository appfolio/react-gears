import { Component, ReactNode } from 'react';

interface CheckboxListInputProps {
  children?: ReactNode;
  onChange?: (value: string[]) => void;
  value?: string[];
}

declare class CheckboxListInput extends Component<CheckboxListInputProps, {}> { }
export default CheckboxListInput;
