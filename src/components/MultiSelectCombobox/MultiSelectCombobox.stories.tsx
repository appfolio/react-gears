import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { states } from '../../tooling/comboboxData';
import DropdownItem from '../Dropdown/DropdownItem';
import Icon from '../Icon/Icon';
import type { ItemComponent } from './Combobox.types';
import ComboboxItem from './ComboboxItem';
import type { ComboboxItemProps } from './ComboboxItem';
import ComboboxItems from './ComboboxItems';
import ComboboxSelection from './ComboboxSelection';
import ComboboxSelections from './ComboboxSelections';
import FilteredComboboxItems from './FilteredComboboxItems';
import MultiSelectCombobox from './MultiSelectCombobox';

const meta: Meta = {
  title: ' Multi-Select Combobox',
  component: MultiSelectCombobox,
  parameters: {
    sourceLink: 'MultiSelectCombobox/MultiSelectCombobox.tsx',
  },
};
export default meta;

type Story = StoryObj<typeof MultiSelectCombobox>;

const options = [
  { label: 'Foo', value: 'foo', id: 1 },
  { label: 'Bar', value: 'bar', id: 2 },
  { label: 'Dog', value: 'dog', id: 3 },
  { label: 'Llama', value: 'llama', id: 4 },
  { label: 'Sloth', value: 'sloth', id: 5 },
];

const selections = [
  { label: 'Cat', value: 'cat', id: 100 },
  { label: 'Lemur', value: 'lemur', id: 200 },
];

export const UncontrolledMode: Story = {
  args: {
    onChange: action('onChange'),
    filterOptions: true,
    allowCreation: false,
    closeOnSelect: true,
  },
  render: (args) => (
    <MultiSelectCombobox
      initialSelections={['CA', 'AK']}
      options={states}
      onCreateOption={(newOptionLabel) => {
        action('onCreateOption')();
        return { label: newOptionLabel, value: newOptionLabel.toLowerCase() };
      }}
      {...args}
    />
  ),
};

export const LongOptionLabels: Story = {
  args: {
    onChange: action('onChange'),
  },
  render: (args) => (
    <MultiSelectCombobox
      options={[
        {
          label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          value: 1,
        },
        {
          label:
            "Feta cheddar when the cheese comes out everybody's happy. Cut the cheese ricotta who moved my cheese airedale fromage stilton melted cheese edam.",
          value: 2,
        },
        { label: 'short one for fun', value: 3 },
        {
          label:
            'I trust you. Could you solutionize that for me can you please change the color theme of the website to pink and purple?',
          value: 4,
        },
      ]}
      {...args}
    />
  ),
};

export const ControlledModeSimple: Story = {
  args: {
    isOpen: false,
    onToggle: action('onToggle'),
  },
  render: (args) => (
    <MultiSelectCombobox {...args}>
      <ComboboxSelections onRemoveAll={action('onRemoveAll')}>
        {selections.map((selection) => (
          <ComboboxSelection key={selection.id} onRemove={action('onRemoveClick (selection)')}>
            {selection.label}
          </ComboboxSelection>
        ))}
      </ComboboxSelections>
      <ComboboxItems>
        {options.map((option) => (
          <ComboboxItem key={option.id} onClick={action('onClick (item)')}>
            {option.label}
          </ComboboxItem>
        ))}
      </ComboboxItems>
    </MultiSelectCombobox>
  ),
};

// * Can't convert to CSF3 (https://storybook.js.org/docs/api/csf) because of the
// composite nature of this story.  Would need to refactor subcomponents into
// separate stories (https://storybook.js.org/docs/writing-stories/stories-for-multiple-components)
const controlledModeWithFilterArgs = {
  isOpen: false,
  onToggle: action('onToggle'),
  allowCreationMultiSelectCombobox: false,
  onRemoveAll: action('onRemoveAll'),
  onRemove: action('onRemoveClick (selection)'),
  filterValue: '',
  onFilterChange: action('onFilterChange'),
  allowCreationFilteredComboboxItems: true,
  onCreateClick: action('onCreateClick'),
  onClick: action('onClick (item)'),
};
export const ControlledModeWithFilter = ({
  isOpen,
  onToggle,
  allowCreationMultiSelectCombobox,
  onRemoveAll,
  onRemove,
  filterValue,
  onFilterChange,
  allowCreationFilteredComboboxItems,
  onCreateClick,
  onClick,
}: typeof controlledModeWithFilterArgs) => (
  <MultiSelectCombobox
    isOpen={isOpen}
    onToggle={onToggle}
    allowCreation={allowCreationMultiSelectCombobox}
  >
    <ComboboxSelections onRemoveAll={onRemoveAll}>
      {selections.map((selection) => (
        <ComboboxSelection key={selection.id} onRemove={onRemove}>
          {selection.label}
        </ComboboxSelection>
      ))}
    </ComboboxSelections>
    <FilteredComboboxItems
      filterValue={filterValue}
      onFilterChange={onFilterChange}
      allowCreation={allowCreationFilteredComboboxItems}
      onCreateClick={onCreateClick}
    >
      {options.map((option) => (
        <ComboboxItem key={option.id} onClick={onClick}>
          {option.label}
        </ComboboxItem>
      ))}
    </FilteredComboboxItems>
  </MultiSelectCombobox>
);
ControlledModeWithFilter.args = controlledModeWithFilterArgs;

const MyCustomItem: ItemComponent = ({ children, onClick }: ComboboxItemProps) => (
  <DropdownItem onClick={onClick} className="fs-1">
    <Icon name="award" className="me-2 text-primary" />
    <span className="text-success">{children}</span>
  </DropdownItem>
);

export const CustomItemRendering: Story = {
  render: () => (
    <MultiSelectCombobox
      onChange={action('onChange')}
      options={states}
      components={{ Item: MyCustomItem }}
    />
  ),
};
