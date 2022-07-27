import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import ComboboxItem from './ComboboxItem';
import ComboboxItems from './ComboboxItems';
import ComboboxSelection from './ComboboxSelection';
import ComboboxSelections from './ComboboxSelections';
import ComboboxWrapper from './ComboboxWrapper';
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
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ComboboxWrapper>
      );

      const itemsMenu = await screen.findByRole('menu', { name: 'Menu Items' });
      expect(itemsMenu).toBeVisible();
    });

    it('does not have visible items when isOpen is false', async () => {
      render(
        <ComboboxWrapper isOpen={false} onToggle={toggleSpy}>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ComboboxWrapper>
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
        <ComboboxWrapper isOpen={false} onToggle={toggleSpy}>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ComboboxWrapper>
      );

      user.click(screen.getByText('Label'));

      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(toggleSpy).toHaveBeenCalledTimes(0);
    });

    it('can fire the onClick and onToggle events', () => {
      render(
        <ComboboxWrapper isOpen={false} onToggle={toggleSpy} closeOnSelect>
          <ComboboxSelections />
          <ComboboxItems>
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </ComboboxItems>
        </ComboboxWrapper>
      );

      user.click(screen.getByText('Label'));

      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(toggleSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('<FilteredComboboxItems>', () => {
    it('can render the filtered combobox items container', async () => {
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="">
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </FilteredComboboxItems>
        </ComboboxWrapper>
      );

      await screen.findByRole('menu');
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('can render the filtered combobox items container with filter text', async () => {
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama">
            <ComboboxItem onClick={clickSpy}>Label</ComboboxItem>
          </FilteredComboboxItems>
        </ComboboxWrapper>
      );

      await screen.findByRole('menu');
      expect(screen.getByDisplayValue('Alabama')).toBeInTheDocument();
    });

    it('can render the container with no children', async () => {
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama" />
        </ComboboxWrapper>
      );

      await screen.findByRole('menu');
      expect(screen.getByText('No results found')).toBeInTheDocument();
    });

    it('can render the no-children container with custom "no results" text', async () => {
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama" noResultsLabel="Du hast nicht" />
        </ComboboxWrapper>
      );

      await screen.findByRole('menu');
      expect(screen.getByText('Du hast nicht')).toBeInTheDocument();
    });

    it('can render a link to create an option', async () => {
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="Alabama" allowCreation />
        </ComboboxWrapper>
      );

      const createLink = await screen.findByText('Create Alabama');
      expect(createLink).toBeInTheDocument();
    });

    it('calls the onCreateClick event', async () => {
      const createClickSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems
            filterValue="Alabama"
            allowCreation
            onCreateClick={createClickSpy}
          />
        </ComboboxWrapper>
      );

      const createLink = await screen.findByText('Create Alabama');
      user.click(createLink);

      expect(createClickSpy).toHaveBeenCalledWith('Alabama');
    });

    it('calls the onFilterChange event', async () => {
      const filterChangeSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen onToggle={toggleSpy}>
          <ComboboxSelections />
          <FilteredComboboxItems filterValue="" onFilterChange={filterChangeSpy} />
        </ComboboxWrapper>
      );

      await screen.findByRole('menu');
      user.type(screen.getByRole('textbox'), 'X');

      expect(filterChangeSpy).toHaveBeenCalledWith('X');
    });
  });

  describe('<ComboboxSelections>', () => {
    it('can render the component', () => {
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections />
          <ComboboxItems />
        </ComboboxWrapper>
      );

      expect(screen.getByText('Click to select an option...')).toBeInTheDocument();
    });

    it('can render with a custom placeholder', () => {
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections placeholder="This is custom" />
          <ComboboxItems />
        </ComboboxWrapper>
      );

      expect(screen.getByText('This is custom')).toBeInTheDocument();
    });

    it('can render existing selections', () => {
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection>Label</ComboboxSelection>
            <ComboboxSelection>Label2</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      expect(screen.getAllByRole('listitem').length).toBe(2);
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('can fire the onRemoveAll event from a mouse click', () => {
      const removeAllSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections onRemoveAll={removeAllSpy}>
            <ComboboxSelection>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      user.click(screen.getByLabelText('Remove all selections'));
      expect(removeAllSpy).toHaveBeenCalledTimes(1);
    });

    it('can fire the onRemoveAll event when the button is focused and {enter} is typed', () => {
      const removeAllSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections onRemoveAll={removeAllSpy}>
            <ComboboxSelection>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const removeAllButton = screen.getByLabelText('Remove all selections');
      removeAllButton.focus();
      user.keyboard('{enter}');

      expect(removeAllSpy).toHaveBeenCalledTimes(1);
    });

    it('can fire the onRemoveAll event when the button is focused and {space} is typed', () => {
      const removeAllSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections onRemoveAll={removeAllSpy}>
            <ComboboxSelection>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const removeAllButton = screen.getByLabelText('Remove all selections');
      removeAllButton.focus();
      user.keyboard('{space}');

      expect(removeAllSpy).toHaveBeenCalledTimes(1);
    });

    it('can fire the onRemoveAll event when the button is focused and "z" is typed', () => {
      const removeAllSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections onRemoveAll={removeAllSpy}>
            <ComboboxSelection>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const removeAllButton = screen.getByLabelText('Remove all selections');
      removeAllButton.focus();
      user.keyboard('z');

      expect(removeAllSpy).not.toHaveBeenCalled();
    });
  });

  describe('<ComboboxSelection>', () => {
    it('can render the selection', () => {
      const removeSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('can call onRemove when the close button within the selection is clicked', () => {
      const removeSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const closeButton = within(screen.getByRole('list')).getByRole('button', {
        hidden: true,
      });
      user.click(closeButton);
      expect(removeSpy).toHaveBeenCalled();
    });

    it('can call onRemove when the close button within the selection is focused and {space} is typed', () => {
      const removeSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const closeButton = within(screen.getByRole('list')).getByRole('button', {
        hidden: true,
      });
      closeButton.focus();
      user.keyboard('{space}');
      expect(removeSpy).toHaveBeenCalled();
    });

    it('can call onRemove when the close button within the selection is focused and {enter} is typed', () => {
      const removeSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const closeButton = within(screen.getByRole('list')).getByRole('button', {
        hidden: true,
      });
      closeButton.focus();
      user.keyboard('{enter}');
      expect(removeSpy).toHaveBeenCalled();
    });

    it('does not call onRemove when the close button within the selection is focused and "a" is typed', () => {
      const removeSpy = jest.fn();
      render(
        <ComboboxWrapper isOpen={false} onToggle={() => {}}>
          <ComboboxSelections>
            <ComboboxSelection onRemove={removeSpy}>Label</ComboboxSelection>
          </ComboboxSelections>
          <ComboboxItems />
        </ComboboxWrapper>
      );

      const closeButton = within(screen.getByRole('list')).getByRole('button', {
        hidden: true,
      });
      closeButton.focus();
      user.keyboard('a');
      expect(removeSpy).not.toHaveBeenCalled();
    });
  });
});
