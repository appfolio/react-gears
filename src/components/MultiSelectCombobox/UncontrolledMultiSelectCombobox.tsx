import React, { useCallback, useEffect, useRef, useState } from 'react';
import type {
  ComboboxOption,
  MultiSelectComboboxComponents,
  OnChangeEnventHandler,
  OptionKey,
} from './Combobox.types';
import DefaultComboboxItem from './ComboboxItem';
import DefaultComboboxItems from './ComboboxItems';
import DefaultComboboxSelection from './ComboboxSelection';
import DefaultComboboxSelections from './ComboboxSelections';
import DefaultComboboxWrapper from './ComboboxWrapper';
import DefaultFilteredComboboxItems from './FilteredComboboxItems';

export interface UncontrolledMultiSelectComboboxProps<T extends ComboboxOption> {
  allowCreation?: boolean;
  closeOnSelect?: boolean;
  components?: MultiSelectComboboxComponents;
  filterOptions?: boolean;
  initialSelections?: OptionKey[];
  onChange: OnChangeEnventHandler<T>;
  onCreateOption?: (newOptionText: string) => T;
  options: T[];
  optionComparisonKey?: string;
}

function isOptionSelected<T extends ComboboxOption>(
  option: T,
  selected: T[],
  comparisonKey = 'value'
) {
  return selected.find((selection) => selection[comparisonKey] === option[comparisonKey]);
}

function isOptionFiltered<T extends ComboboxOption>(option: T, filterText: string) {
  return filterText === '' || option.label.toLowerCase().includes(filterText.toLowerCase());
}

const defaultProps = {
  filterOptions: true,
  initialSelections: [],
  optionComparisonKey: 'value',
};

const defaultComponents: Required<MultiSelectComboboxComponents> = {
  FilteredItems: DefaultFilteredComboboxItems,
  Item: DefaultComboboxItem,
  Items: DefaultComboboxItems,
  Selection: DefaultComboboxSelection,
  Selections: DefaultComboboxSelections,
  Wrapper: DefaultComboboxWrapper,
};

function UncontrolledMultiSelectCombobox<T extends ComboboxOption>({
  allowCreation,
  closeOnSelect,
  components,
  filterOptions = defaultProps.filterOptions,
  initialSelections = defaultProps.initialSelections,
  onCreateOption,
  onChange,
  options,
  optionComparisonKey = defaultProps.optionComparisonKey,
}: UncontrolledMultiSelectComboboxProps<T>) {
  const Components = { ...defaultComponents, ...components };

  const [isOpen, setIsOpen] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState<T[]>([]);
  const [selections, setSelections] = useState<T[]>(
    options.filter((option) => initialSelections.includes(option[optionComparisonKey]))
  );
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const visible: T[] = [];

    options.forEach((option) => {
      if (isOptionFiltered(option, filterText) && !isOptionSelected(option, selections)) {
        visible.push(option);
      }
    });

    setVisibleOptions(visible);
  }, [options, selections, filterText]);

  const canCreateOption = useCallback(() => {
    if (filterText === '' || !allowCreation) {
      return false;
    }
    if (
      options &&
      options.find((option) => option.label.toLowerCase() === filterText.toLowerCase())
    ) {
      return false;
    }
    return true;
  }, [options, filterText, allowCreation]);

  const filterInputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        filterInputRef?.current?.focus();
        setFilterText('');
      }, 10);
    }
  };

  const handleRemoveAll = () => {
    setSelections([]);
    setIsOpen(false);
    onChange?.([]);
  };

  const handleSelectionRemove = (selection: T) => {
    const newSelections: T[] = [];
    selections.forEach((current) => {
      if (selection[optionComparisonKey] !== current[optionComparisonKey]) {
        newSelections.push(current);
      }
    });
    setSelections(newSelections);
    onChange?.(newSelections);
    setIsOpen(false);
  };

  const handleFilterChanged = (text: string) => {
    setFilterText(text);
  };

  const handleOptionClicked = (option: T) => {
    const newSelections = [...selections];
    newSelections.push(option);
    setSelections(newSelections);
    onChange?.(newSelections);
  };

  const handleCreateOption = (optionValue: string) => {
    const newOption = onCreateOption?.(optionValue);
    if (newOption) {
      handleOptionClicked(newOption);
    }
    setIsOpen(false);
  };

  return (
    <Components.Wrapper isOpen={isOpen} onToggle={handleToggle} closeOnSelect={closeOnSelect}>
      <Components.Selections onRemoveAll={handleRemoveAll}>
        {selections.map((selection) => (
          <Components.Selection
            key={selection[optionComparisonKey]}
            onRemove={() => handleSelectionRemove(selection)}
          >
            {selection.label}
          </Components.Selection>
        ))}
      </Components.Selections>

      {filterOptions ? (
        <Components.FilteredItems
          allowCreation={canCreateOption()}
          filterValue={filterText}
          filterInputRef={filterInputRef}
          onCreateClick={handleCreateOption}
          onFilterChange={handleFilterChanged}
        >
          {visibleOptions.map((option) => (
            <Components.Item
              key={option[optionComparisonKey]}
              onClick={() => handleOptionClicked(option)}
            >
              {option.label}
            </Components.Item>
          ))}
        </Components.FilteredItems>
      ) : (
        <Components.Items>
          {visibleOptions.map((option) => (
            <Components.Item
              key={option[optionComparisonKey]}
              onClick={() => handleOptionClicked(option)}
            >
              {option.label}
            </Components.Item>
          ))}
        </Components.Items>
      )}
    </Components.Wrapper>
  );
}

export default UncontrolledMultiSelectCombobox;
