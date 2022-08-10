import { boolean } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import BlockPanel from '../BlockPanel/BlockPanel';
import Tree from './Tree';

export default {
  title: 'Tree',
  component: Tree,
};

const data = [
  {
    item: 'Pepperoni',
    expanded: true,
    selected: null,
    children: [
      {
        item: 'Spicy',
        expanded: false,
        selected: false,
      },
      {
        item: 'Regular',
        expanded: false,
        selected: true,
      },
    ],
  },
  {
    item: 'Chicken',
    expanded: false,
    selected: false,
    children: [
      {
        item: 'Buffalo',
        expanded: false,
        selected: false,
        children: [
          {
            item: 'Mild',
            expanded: false,
            selected: false,
          },
          {
            item: 'Hot',
            expanded: false,
            selected: false,
            children: [
              {
                item: 'Jalapeño',
                expanded: false,
                selected: false,
              },
              {
                item: 'Cayenne',
                expanded: false,
                selected: false,
              },
            ],
          },
        ],
      },
      {
        item: 'BBQ',
        expanded: false,
        selected: false,
      },
    ],
  },
];

const labelRenderer = (item, { selected }) => (
  <div className="d-flex align-items-center">
    <h4 className="m-0 font-weight-normal">{item}</h4>
    <span className="mx-2 text-secondary">{selected ? "Hey I'm selected" : '--'}</span>
  </div>
);

export const LiveExample = () => {
  const [options, setOptions] = useState(data);

  return (
    <BlockPanel title="Tree Sample">
      <Tree
        options={options}
        onChange={(updatedOptions) => setOptions(updatedOptions)}
        label={labelRenderer}
        selectable={boolean('selectable', true)}
      />
    </BlockPanel>
  );
};
