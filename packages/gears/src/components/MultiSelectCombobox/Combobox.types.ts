import type { ComponentType, ReactElement } from 'react';
import type { ComboboxItemProps } from './ComboboxItem';
import type { ComboboxItemsProps } from './ComboboxItems';
import type { ComboboxSelectionProps } from './ComboboxSelection';
import type { ComboboxSelectionsProps } from './ComboboxSelections';
import type { ComboboxWrapperProps } from './ComboboxWrapper';
import type { FilteredComboboxItemsProps } from './FilteredComboboxItems';

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

export type FilteredItemsComponent = ComponentType<FilteredComboboxItemsProps>;
export type ItemComponent = ComponentType<ComboboxItemProps>;
export type ItemsComponent = ComponentType<ComboboxItemsProps>;
export type SelectionComponent = ComponentType<ComboboxSelectionProps>;
export type SelectionsComponent = ComponentType<ComboboxSelectionsProps>;
export type WrapperComponent = ComponentType<ComboboxWrapperProps>;

export interface MultiSelectComboboxComponents {
  FilteredItems?: FilteredItemsComponent;
  Item?: ItemComponent;
  Items?: ItemsComponent;
  Selection?: SelectionComponent;
  Selections?: SelectionsComponent;
  Wrapper?: WrapperComponent;
}
