import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TreeItem from './TreeItem';

describe('<TreeItem />', () => {
  let props;
  beforeEach(() => {
    props = {
      className: 'js-tree-item',
      indent: 2,
      label: (item) => <>Item - {item}</>,
      option: {
        item: 'X',
        children: [
          {
            item: 'Y',
            children: undefined,
            selected: false,
          },
        ],
        selected: false,
      },
      selectable: true,
      updateOption: jest.fn(),
    };
  });

  it('should render correctly', () => {
    const { container } = render(<TreeItem {...props} />);

    expect(container.querySelector('.js-tree-item')).toBeInTheDocument();
    expect(screen.queryByText('Item - X')).toBeTruthy();
    fireEvent.click(container.querySelector('.rg-treeitem-checkbox'));
    expect(props.updateOption).toHaveBeenCalled();
  });
});
