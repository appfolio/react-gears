import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { states } from '../../tooling/comboboxData';
import DeprecationDecorator from '../../tooling/ReactComponentsDeprecation';
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

type ComboboxStory = ComponentStory<typeof MultiSelectCombobox>;

export default {
  title: ' Multi-Select Combobox',
  component: MultiSelectCombobox,
  decorators: [
    (Story) => (
      <DeprecationDecorator
        name="Combobox"
        story={Story}
        storyPath="/story/components-combobox--multiple"
      />
    ),
  ],
} as ComponentMeta<typeof MultiSelectCombobox>;

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

export const UncontrolledMode: ComboboxStory = () => (
  <MultiSelectCombobox
    initialSelections={['CA', 'AK']}
    options={states}
    onChange={action('onChange')}
    filterOptions={boolean('filterOptions', true)}
    allowCreation={boolean('allowCreation', false)}
    onCreateOption={(newOptionLabel) => {
      action('onCreateOption')();
      return { label: newOptionLabel, value: newOptionLabel.toLowerCase() };
    }}
    closeOnSelect={boolean('closeOnSelect', true)}
  />
);

export const LongOptionLabels: ComboboxStory = () => (
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
    onChange={action('onChange')}
  />
);

export const ControlledModeSimple: ComboboxStory = () => (
  <MultiSelectCombobox isOpen={boolean('isOpen', false)} onToggle={action('onToggle')}>
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
);

export const ControlledModeWithFilter: ComboboxStory = () => (
  <MultiSelectCombobox
    isOpen={boolean('isOpen', false)}
    onToggle={action('onToggle')}
    allowCreation={boolean('allowCreation', false)}
  >
    <ComboboxSelections onRemoveAll={action('onRemoveAll')}>
      {selections.map((selection) => (
        <ComboboxSelection key={selection.id} onRemove={action('onRemoveClick (selection)')}>
          {selection.label}
        </ComboboxSelection>
      ))}
    </ComboboxSelections>
    <FilteredComboboxItems
      filterValue={text('filterValue', '')}
      onFilterChange={action('onFilterChange')}
      allowCreation={boolean('allowCreation', true)}
      onCreateClick={action('onCreateClick')}
    >
      {options.map((option) => (
        <ComboboxItem key={option.id} onClick={action('onClick (item)')}>
          {option.label}
        </ComboboxItem>
      ))}
    </FilteredComboboxItems>
  </MultiSelectCombobox>
);

const MyCustomItem: ItemComponent = ({ children, onClick }: ComboboxItemProps) => (
  <DropdownItem onClick={onClick} className="fs-1">
    <Icon name="award" className="me-2 text-primary" />
    <span className="text-success">{children}</span>
  </DropdownItem>
);

export const CustomItemRendering: ComboboxStory = () => (
  <MultiSelectCombobox
    onChange={action('onChange')}
    options={states}
    components={{ Item: MyCustomItem }}
  />
);
