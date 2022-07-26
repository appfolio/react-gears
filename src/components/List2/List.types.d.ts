import DefaultListHeader from './ListHeader';
import DefaultListHeaderCheckbox from './ListHeaderCheckbox';
import DefaultListHeaderFilter from './ListHeaderFilter';
import DefaultListHeaderSort from './ListHeaderSort';
import DefaultListItemWrapper from './ListItemWrapper';
import DefaultListItem from './ListItem';
import DefaultListItems from './ListItems';
import DefaultListWrapper from './ListWrapper';
import DefaultListItemExpanded from './ListItemExpanded';

export type HeaderComponent = typeof DefaultListHeader;
export type HeaderCheckboxComponent = typeof DefaultListHeaderCheckbox;
export type HeaderFilterComponent = typeof DefaultListHeaderFilter;
export type HeaderSortComponent = typeof DefaultListHeaderSort;
export type ListItemsComponent = typeof DefaultListItems;
export type ListItemWrapperComponent = typeof DefaultListItemWrapper;
export type ListItemComponent = typeof DefaultListItem;
export type ListWrapperComponent = typeof DefaultListWrapper;
export type ListItemExpandedComponent = typeof DefaultListItemExpanded;
export type ItemBodyComponent<T extends ListDataItem> = ({ item }: { item: T }) => JSX.Element;
export type ExpandedItemBodyComponent<T extends ListDataItem> = ({
  item,
}: {
  item: T;
}) => JSX.Element;

export type ItemId = string | number;
export interface ListDataItem {
  [key: string]: any;
}

export type FilterItemCallback<T> = (filterText: string, item: T) => boolean;

export interface ListComponents {
  Wrapper?: ListWrapperComponent;
  Header?: HeaderComponent;
  HeaderCheckbox?: HeaderCheckboxComponent;
  HeaderFilter?: HeaderFilterComponent;
  HeaderSort?: HeaderSortComponent;
  ListItems?: ListItemsComponent;
  ListItemWrapper?: ListItemWrapperComponent;
  ListItem?: ListItemComponent;
  ListItemExpanded?: ListItemExpandedComponent;
  ItemBody: ItemBodyComponent;
  ExpandedItemBody?: ExpandedItemBodyComponent;
}
