import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import ComboboxItem from './ComboboxItem';
import ComboboxItems from './ComboboxItems';
import ComboboxSelection from './ComboboxSelection';
import ComboboxSelections from './ComboboxSelections';
import ControlledMultiSelectCombobox from './ControlledMultiSelectCombobox';
import FilteredComboboxItems from './FilteredComboboxItems';

describe('<MultiSelectCombobox>', () => {
  const clickSpy = jest.fn();
  const toggleSpy = jest.fn();

  afterEach(() => {
    clickSpy.mockRestore();
  });

  describe('Open/close behavior', () => {
    it('has visible items when isOpen is true', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ControlledMultiSelectCombobox>
      );

      const itemsMenu = await screen.findByRole('menu', { name: 'Menu Items' });
      expect(itemsMenu).toBeVisible();
    });

    it('does not have visible items when isOpen is false', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={toggleSpy}>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ControlledMultiSelectCombobox>
      );

      const menu = await screen.findByRole('menu', { hidden: true });
      expect(within(menu).getByText('Label')).toBeInTheDocument();
    });
  });

  describe('<ComboboxItem> and <ComboboxItems>', () => {
    it('can render the component', () => {
      const { container } = render(<ComboboxItem onClick={clickSpy}>Label</ComboboxItem>);
      expect(container).toBeDefined();
    });

    it('can fire the onClick event', () => {
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={toggleSpy}>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ControlledMultiSelectCombobox>
      );

      user.click(screen.getByText('Label'));

      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(toggleSpy).toHaveBeenCalledTimes(0);
    });

    it('can fire the onClick and onToggle events', () => {
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={toggleSpy} closeOnSelect>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ControlledMultiSelectCombobox>
      );

      user.click(screen.getByText('Label'));

      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(toggleSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('<FilteredComboboxItems>', () => {
    it('can render the filtered combobox items container', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="">
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </FilteredComboboxItems>
        </ControlledMultiSelectCombobox>
      );

      await screen.findByRole('menu');
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('can render the filtered combobox items container with filter text', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama">
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </FilteredComboboxItems>
        </ControlledMultiSelectCombobox>
      );

      await screen.findByRole('menu');
      expect(screen.getByDisplayValue('Alabama')).toBeInTheDocument();
    });

    it('can render the container with no children', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama" />
        </ControlledMultiSelectCombobox>
      );

      await screen.findByRole('menu');
      expect(screen.getByText('No results found')).toBeInTheDocument();
    });

    it('can render the no-children container with custom "no results" text', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama" noResultsLabel="Du hast nicht" />
        </ControlledMultiSelectCombobox>
      );

      await screen.findByRole('menu');
      expect(screen.getByText('Du hast nicht')).toBeInTheDocument();
    });

    it('can render a link to create an option', async () => {
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama" allowCreation />
        </ControlledMultiSelectCombobox>
      );

      const createLink = await screen.findByText('Create Alabama');
      expect(createLink).toBeInTheDocument();
    });

    it('calls the onCreateClick event', async () => {
      const createClickSpy = jest.fn();
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems
            filterValue="Alabama"
            allowCreation
            onCreateClick={createClickSpy}
          />
        </ControlledMultiSelectCombobox>
      );

      const createLink = await screen.findByText('Create Alabama');
      user.click(createLink);

      expect(createClickSpy).toHaveBeenCalledWith('Alabama');
    });

    it('calls the onFilterChange event', async () => {
      const filterChangeSpy = jest.fn();
      render(
        <ControlledMultiSelectCombobox isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="" onFilterChange={filterChangeSpy} />
        </ControlledMultiSelectCombobox>
      );

      await screen.findByRole('menu');
      user.type(screen.getByRole('textbox'), 'X');

      expect(filterChangeSpy).toHaveBeenCalledWith('X');
    });
  });

  describe('<ComboboxSelections>', () => {
    it('can render the component', () => {
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={() => {}}>
          <ComboboxSelections />
          <ComboboxItems />
        </ControlledMultiSelectCombobox>
      );

      expect(screen.getByText('Click to select an option...')).toBeInTheDocument();
    });

    it('can render with a custom placeholder', () => {
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={() => {}}>
          <ComboboxSelections placeholder="This is custom" />
          <ComboboxItems />
        </ControlledMultiSelectCombobox>
      );

      expect(screen.getByText('This is custom')).toBeInTheDocument();
    });

    it('can render existing selections', () => {
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection>Label</ComboboxSelection>
            <ComboboxSelection>Label2</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ControlledMultiSelectCombobox>
      );

      expect(screen.getAllByRole('listitem').length).toBe(2);
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('can fire the onRemoveAll event', () => {
      const removeAllSpy = jest.fn();
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={() => {}}>
          <ComboboxSelections onRemoveAll={removeAllSpy}>
            <ComboboxSelection>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ControlledMultiSelectCombobox>
      );

      user.click(screen.getByLabelText('Remove all selections'));
      expect(removeAllSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('<ComboboxSelection>', () => {
    it('can render the selection', () => {
      const removeSpy = jest.fn();
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ControlledMultiSelectCombobox>
      );

      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('can call onRemove when the close button within the selection is clicked', () => {
      const removeSpy = jest.fn();
      render(
        <ControlledMultiSelectCombobox isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ControlledMultiSelectCombobox>
      );

      const closeButton = within(screen.getByRole('list')).getByRole('button', {
        hidden: true,
      });
      user.click(closeButton);
      expect(removeSpy).toHaveBeenCalled();
    });
  });
});
