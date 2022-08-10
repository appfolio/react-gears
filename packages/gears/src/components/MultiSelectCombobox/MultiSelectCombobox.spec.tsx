import { render, screen } from '@testing-library/react';
import React from 'react';
import ComboboxItems from './ComboboxItems';
import ComboboxSelections from './ComboboxSelections';
import MultiSelectCombobox from './MultiSelectCombobox';

describe('<MultiSelectCombobox>', () => {
  it('can render the component in uncontrolled mode', () => {
    render(<MultiSelectCombobox options={[]} onChange={jest.fn()} />);
    expect(screen.getByText('Click to select an option...')).toBeInTheDocument();
  });

  it('can render the component in controlled mode', () => {
    render(
      <MultiSelectCombobox isOpen onToggle={jest.fn()}>
        <ComboboxSelections />
        <ComboboxItems />
      </MultiSelectCombobox>
    );
    expect(screen.getByText('Click to select an option...')).toBeInTheDocument();
  });
});
