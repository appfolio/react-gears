import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tree from './Tree';

describe('<Tree />', () => {
  let data;
  beforeEach(() => {
    data = [
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
  });

  it('should render correctly', () => {
    const labelRenderer = (item, { selected }) => (
      <div className="d-flex align-items-center" data-testid="js-item-label">
        <h4 className="m-0 font-weight-normal">{item}</h4>
        <span className="mx-2 text-secondary">
          {selected ? `${item} is selected` : `${item} is not selected`}
        </span>
      </div>
    );
    const updateOption = jest.fn();
    render(<Tree options={data} label={labelRenderer} onChange={updateOption} selectable />);

    expect(screen.queryAllByTestId('js-item-label').length).toEqual(10);
    expect(screen.queryByText('Regular is selected')).toBeInTheDocument();
    expect(screen.queryByText('Chicken is not selected')).toBeInTheDocument();
    fireEvent.click(screen.queryAllByTestId('tree-item-checkbox-input')[1]);
    expect(updateOption).toHaveBeenCalled();
  });
});
