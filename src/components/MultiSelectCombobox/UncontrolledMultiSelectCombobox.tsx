import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { ComboboxOption, OnChangeEnventHandler } from './Combobox.types';
import ComboboxItem from './ComboboxItem';
import ComboboxItems from './ComboboxItems';
import ComboboxSelection from './ComboboxSelection';
import ComboboxSelections from './ComboboxSelections';
import ControlledMultiSelectCombobox from './ControlledMultiSelectCombobox';
import FilteredComboboxItems from './FilteredComboboxItems';

export interface UncontrolledMultiSelectComboboxProps<T extends ComboboxOption> {
  allowCreation?: boolean;
  closeOnSelect?: boolean;
  filterOptions?: boolean;
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
  optionComparisonKey: 'value',
};

function UncontrolledMultiSelectCombobox<T extends ComboboxOption>({
  allowCreation,
  closeOnSelect,
  filterOptions = defaultProps.filterOptions,
  onCreateOption,
  onChange,
  options,
  optionComparisonKey = defaultProps.optionComparisonKey,
}: UncontrolledMultiSelectComboboxProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState<T[]>([]);
  const [selections, setSelections] = useState<T[]>([]);
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
    <ControlledMultiSelectCombobox
      isOpen={isOpen}
      onToggle={handleToggle}
      closeOnSelect={closeOnSelect}
    >
      <ComboboxSelections onRemoveAll={handleRemoveAll}>
        {selections.map((selection) => (
          <ComboboxSelection
            key={selection[optionComparisonKey]}
            onRemove={() => handleSelectionRemove(selection)}
          >
            {selection.label}
          </ComboboxSelection>
        ))}
      </ComboboxSelections>

      {filterOptions ? (
        <FilteredComboboxItems
          allowCreation={canCreateOption()}
          filterValue={filterText}
          filterInputRef={filterInputRef}
          onCreateClick={handleCreateOption}
          onFilterChange={handleFilterChanged}
        >
          {visibleOptions.map((option) => (
            <ComboboxItem
              key={option[optionComparisonKey]}
              onClick={() => handleOptionClicked(option)}
            >
              {option.label}
            </ComboboxItem>
          ))}
        </FilteredComboboxItems>
      ) : (
        <ComboboxItems>
          {visibleOptions.map((option) => (
            <ComboboxItem
              key={option[optionComparisonKey]}
              onClick={() => handleOptionClicked(option)}
            >
              {option.label}
            </ComboboxItem>
          ))}
        </ComboboxItems>
      )}
    </ControlledMultiSelectCombobox>
  );
}

export default UncontrolledMultiSelectCombobox;
