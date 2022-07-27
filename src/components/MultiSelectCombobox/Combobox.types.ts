import type { ReactElement } from 'react';
import ComboboxItem from './ComboboxItem';
import type { ComboboxItemsProps } from './ComboboxItems';
import ComboboxItems from './ComboboxItems';
import ComboboxSelection from './ComboboxSelection';
import type { ComboboxSelectionsProps } from './ComboboxSelections';
import ComboboxSelections from './ComboboxSelections';
import ComboboxWrapper from './ComboboxWrapper';
import FilteredComboboxItems from './FilteredComboboxItems';

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

export type OptionKey = string | number;

export type FilteredItemsComponent = typeof FilteredComboboxItems;
export type ItemComponent = typeof ComboboxItem;
export type ItemsComponent = typeof ComboboxItems;
export type SelectionComponent = typeof ComboboxSelection;
export type SelectionsComponent = typeof ComboboxSelections;
export type WrapperComponent = typeof ComboboxWrapper;

export interface MultiSelectComboboxComponents {
  FilteredItems?: FilteredItemsComponent;
  Item?: ItemComponent;
  Items?: ItemsComponent;
  Selection?: SelectionComponent;
  Selections?: SelectionsComponent;
  Wrapper?: WrapperComponent;
}
