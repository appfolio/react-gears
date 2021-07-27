import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { BlockPanel, Tree } from '../src';

const data = [
  {
    item: 'Pepperoni',
    key: 'Pepperoni',
    expanded: true,
    selected: null,
    children: [
      {
        item: 'Spicy',
        key: 'Spicy',
        expanded: false,
        selected: false
      },
      {
        item: 'Regular',
        key: 'Regular',
        expanded: false,
        selected: true
      }
    ]
  },
  {
    item: 'Chicken',
    key: 'Chicken',
    expanded: false,
    selected: false,
    children: [
      {
        item: 'Buffalo',
        key: 'Buffalo',
        expanded: false,
        selected: false,
        children: [
          {
            item: 'Mild',
            key: 'Mild',
            expanded: false,
            selected: false
          },
          {
            item: 'Hot',
            key: 'Hot',
            expanded: false,
            selected: false,
            children: [
              {
                item: 'Jalapeño',
                key: 'Jalapeño',
                expanded: false,
                selected: false
              },
              {
                item: 'Cayenne',
                key: 'Cayenne',
                expanded: false,
                selected: false
              }
            ]
          }
        ]
      },
      {
        item: 'BBQ',
        key: 'BBQ',
        expanded: false,
        selected: false
      }
    ]
  }
];

export default {
  title: 'Tree',
  component: Tree,
};

export const LiveExample = () => {
  const [items, setOptions] = useState(data);
  return (
    <BlockPanel title="Tree Sample">
      <Tree
        items={items}
        onChange={updatedOptions => setOptions(updatedOptions)}
        label={(item, { selected }) => (
          <div className="d-flex align-items-center">
            <h4 className="m-0 font-weight-normal">{item}</h4>
            <span className="ml-auto text-secondary">
              {selected ? "Hey I'm selected" : '--'}
            </span>
          </div>
        )}
        selectable={boolean('selectable', true)}
      />
    </BlockPanel>
  );
};
