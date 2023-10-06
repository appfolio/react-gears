import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import UncontrolledMultiSelectCombobox from './UncontrolledMultiSelectCombobox';

const options = [
  { label: 'Option One', value: 'one', id: 1 },
  { label: 'Option Two', value: 'two', id: 2 },
  { label: 'Option Three', value: 'three', id: 3 },
  { label: 'Option Four', value: 'four', id: 4 },
];
describe('<UncontrolledMultiSelectCombobox>', () => {
  it('can render the component', () => {
    render(<UncontrolledMultiSelectCombobox options={options} onChange={jest.fn()} />);
    expect(screen.getByText('Click to select an option...')).toBeInTheDocument();
  });

  it('can open the filtered items when the toggle is clicked', async () => {
    render(<UncontrolledMultiSelectCombobox options={options} onChange={jest.fn()} />);

    const toggler = screen.getByText('Click to select an option...');
    user.click(toggler);

    const menu = await screen.findByRole('menu');
    expect(menu).toBeInTheDocument();

    expect(within(menu).getByRole('textbox')).toBeInTheDocument();

    // Close it up again
    user.click(toggler);
    await screen.findByRole('menu', { hidden: true });
  });

  it('can open the plain items when the toggle is clicked', async () => {
    render(
      <UncontrolledMultiSelectCombobox
        options={options}
        onChange={jest.fn()}
        filterOptions={false}
      />
    );
    user.click(screen.getByText('Click to select an option...'));

    const menu = await screen.findByRole('menu');
    expect(menu).toBeInTheDocument();

    expect(within(menu).queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('can select an option when clicked', async () => {
    const changeSpy = jest.fn();
    render(<UncontrolledMultiSelectCombobox options={options} onChange={changeSpy} />);
    user.click(screen.getByText('Click to select an option...'));

    const menu = await screen.findByRole('menu');
    user.click(within(menu).getByText('Option One'));
    expect(changeSpy).toHaveBeenCalledWith([{ label: 'Option One', value: 'one', id: 1 }]);

    const closedMenu = await screen.findByRole('menu', { hidden: true });
    expect(closedMenu).toBeInTheDocument();
  });

  it('can select an option in the plain items', async () => {
    const changeSpy = jest.fn();
    render(
      <UncontrolledMultiSelectCombobox
        options={options}
        filterOptions={false}
        onChange={changeSpy}
      />
    );
    user.click(screen.getByText('Click to select an option...'));

    const menu = await screen.findByRole('menu');
    user.click(within(menu).getByText('Option One'));
    expect(changeSpy).toHaveBeenCalledWith([{ label: 'Option One', value: 'one', id: 1 }]);

    const closedMenu = await screen.findByRole('menu', { hidden: true });
    expect(closedMenu).toBeInTheDocument();
  });

  it('can remove a selection', async () => {
    const changeSpy = jest.fn();
    render(
      <UncontrolledMultiSelectCombobox
        options={options}
        onChange={changeSpy}
        closeOnSelect={false}
      />
    );

    const toggle = screen.getByText('Click to select an option...');

    user.click(toggle);
    let menu = await screen.findByRole('menu');
    user.click(within(menu).getByText('Option One'));
    expect(changeSpy).toHaveBeenCalledTimes(1);
    expect(changeSpy).toHaveBeenLastCalledWith([{ label: 'Option One', value: 'one', id: 1 }]);

    //user.click(toggle);
    menu = await screen.findByRole('menu');
    user.click(within(menu).getByText('Option Two'));
    expect(changeSpy).toHaveBeenCalledTimes(2);
    expect(changeSpy).toHaveBeenLastCalledWith([
      { label: 'Option One', value: 'one', id: 1 },
      { label: 'Option Two', value: 'two', id: 2 },
    ]);

    const selected = await screen.findAllByRole('listitem');
    expect(selected.length).toBe(2);

    user.click(within(selected[0]).getByRole('button'));
    expect(changeSpy).toHaveBeenCalledTimes(3);
    expect(changeSpy).toHaveBeenLastCalledWith([{ label: 'Option Two', value: 'two', id: 2 }]);
  });

  it('can delete all selections', async () => {
    const changeSpy = jest.fn();
    render(<UncontrolledMultiSelectCombobox options={options} onChange={changeSpy} />);

    const toggle = screen.getByText('Click to select an option...');

    user.click(toggle);
    let menu = await screen.findByRole('menu');
    user.click(within(menu).getByText('Option One'));

    user.click(toggle);
    menu = await screen.findByRole('menu');
    user.click(within(menu).getByText('Option Two'));

    const selected = await screen.findAllByRole('listitem');
    expect(selected.length).toBe(2);

    const removeAllButton = screen.getByLabelText('Remove all selections');
    user.click(removeAllButton);
    expect(changeSpy).toHaveBeenCalledTimes(3);
    expect(changeSpy).toHaveBeenLastCalledWith([]);
  });

  it('can display the correct subset of options when the filter has changed', async () => {
    render(<UncontrolledMultiSelectCombobox options={options} onChange={jest.fn()} />);
    user.click(screen.getByText('Click to select an option...'));

    const filterInput = await screen.findByRole('textbox');
    user.type(filterInput, 'r');

    const visibleOptions = screen.getAllByRole('menuitem');
    expect(visibleOptions.length).toBe(2);

    expect(screen.queryByText('Option One')).not.toBeInTheDocument();
    expect(screen.queryByText('Option Two')).not.toBeInTheDocument();
    expect(screen.getByText('Option Three')).toBeInTheDocument();
    expect(screen.getByText('Option Four')).toBeInTheDocument();
  });

  it('can show the Create Option link', async () => {
    render(
      <UncontrolledMultiSelectCombobox options={options} onChange={jest.fn()} allowCreation />
    );
    user.click(screen.getByText('Click to select an option...'));

    const filterInput = await screen.findByRole('textbox');
    const menu = screen.getByRole('menu');

    expect(within(menu).queryByRole('button')).not.toBeInTheDocument();

    user.type(filterInput, 'Created');
    expect(within(menu).getByRole('button', { name: 'Create Created' })).toBeInTheDocument();
  });

  it('can hide the Create Option link when the filter text matches an option label', async () => {
    render(
      <UncontrolledMultiSelectCombobox options={options} onChange={jest.fn()} allowCreation />
    );
    user.click(screen.getByText('Click to select an option...'));

    const filterInput = await screen.findByRole('textbox');
    const menu = screen.getByRole('menu');

    expect(within(menu).queryByRole('button')).not.toBeInTheDocument();

    user.type(filterInput, 'Option ');
    expect(within(menu).getByRole('button', { name: 'Create Option' })).toBeInTheDocument();

    user.type(filterInput, 'One');
    expect(within(menu).queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls onCreateOption when the Create link is clicked', async () => {
    const createOptionSpy = jest.fn();
    render(
      <UncontrolledMultiSelectCombobox
        options={options}
        onChange={jest.fn()}
        allowCreation
        onCreateOption={createOptionSpy}
      />
    );

    user.click(screen.getByText('Click to select an option...'));

    const menu = await screen.findByRole('menu');

    expect(within(menu).queryByRole('button')).not.toBeInTheDocument();

    const filterInput = screen.getByRole('textbox');
    user.type(filterInput, 'Option');
    const createButton = within(menu).getByRole('button', { name: 'Create Option' });

    user.click(createButton);
    expect(createOptionSpy).toHaveBeenCalledWith('Option');
  });

  it('adds an option when onCreateOption returns a value', async () => {
    const newOption = { id: 50, label: 'Option Fifty', value: 'fifty' };

    const createOptionSpy = jest.fn().mockReturnValueOnce(newOption);

    const changeSpy = jest.fn();
    render(
      <UncontrolledMultiSelectCombobox
        options={options}
        allowCreation
        onCreateOption={createOptionSpy}
        onChange={changeSpy}
      />
    );

    user.click(screen.getByText('Click to select an option...'));

    const menu = await screen.findByRole('menu');

    expect(within(menu).queryByRole('button')).not.toBeInTheDocument();

    const filterInput = screen.getByRole('textbox');
    user.type(filterInput, 'Option');
    const createButton = within(menu).getByRole('button', { name: 'Create Option' });

    user.click(createButton);
    expect(createOptionSpy).toHaveBeenCalledWith('Option');

    expect(changeSpy).toHaveBeenCalledWith([newOption]);
  });
});
