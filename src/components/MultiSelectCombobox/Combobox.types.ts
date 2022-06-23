import { ReactElement } from 'react';
import { ComboboxItemsProps } from './ComboboxItems';
import { ComboboxSelectionsProps } from './ComboboxSelections';

export interface ComboboxOption {
  label: string;
  value: any;
  [key: string]: any;
}

export type OnChangeEnventHandler<T extends ComboboxOption> = (selections: T[]) => void;

export type ControlledModeChildren = [
  ReactElement<ComboboxSelectionsProps>,
  ReactElement<ComboboxItemsProps>
];
