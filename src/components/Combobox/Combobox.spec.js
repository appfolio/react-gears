import assert from 'assert';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import sinon from 'sinon';
import { assertAccessible } from '../../tooling/a11yHelpers';
import Combobox from './Combobox';

const OPTIONS = [
  { label: 'R2-D2', value: 1 },
  { label: 'BB8', value: 2 },
  { label: 'D-O', value: 3 },
  { label: 'CP3O', value: 4 },
];

describe('<Combobox />', () => {
  afterEach(cleanup);

  it('should be accessible', async () => {
    await assertAccessible(<Combobox options={OPTIONS} />);
  });

  it('should render with empty options array', () => {
    const combobox = render(<Combobox options={[]} />);
    combobox.getByTestId('react-gears-combobox-input');
  });

  it('should show options when focused', () => {
    const combobox = render(<Combobox options={OPTIONS} />);
    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );
  });

  it('should pass inputClassName to Input', () => {
    const innerClassName = 'js-no-autofocus';
    const combobox = render(<Combobox options={OPTIONS} inputClassName={innerClassName} />);

    assert(combobox.getByTestId('react-gears-combobox-input').classList.contains(innerClassName));
  });

  it('should have "search" as default Input type', () => {
    const combobox = render(<Combobox options={[]} />);
    const input = combobox.getByTestId('react-gears-combobox-input');

    assert.strictEqual(input.type, 'search');
  });

  it('should pass type to Input', () => {
    const combobox = render(<Combobox options={[]} type="text" />);
    const input = combobox.getByTestId('react-gears-combobox-input');

    assert.strictEqual(input.type, 'text');
  });

  it('should show all options when there is a selected option', () => {
    const combobox = render(<Combobox options={OPTIONS} value={OPTIONS[0]} />);
    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    OPTIONS.forEach((o) => {
      combobox.getByText(o.label);
    });
  });

  it('should call onChange when value changes', () => {
    const mockOnChange = sinon.spy();
    const combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    const option = combobox.getByText('D-O');
    fireEvent.mouseDown(option);

    sinon.assert.called(mockOnChange);
    sinon.assert.calledWith(mockOnChange, OPTIONS[2].value);
  });

  it('should close menu on blur', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );

    fireEvent.blur(input);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );
  });

  it('should not close menu when menu container is focused', () => {
    const combobox = render(<Combobox options={OPTIONS} />);
    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);
    const dropdown = combobox.getByTestId('react-gears-combobox-dropdown');
    const menu = combobox.getByTestId('react-gears-combobox-menu');
    fireEvent.blur(dropdown, { relatedTarget: menu });

    expect(combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden')).toEqual(
      'false'
    );
  });

  it('should close menu on blur of caret button', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const caret = combobox.getByTestId('react-gears-combobox-caret');
    fireEvent.mouseDown(caret);

    assert.strictEqual(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );

    fireEvent.blur(caret);

    assert.strictEqual(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );
  });

  it('should blur input on close', () => {
    const combobox = render(<Combobox options={OPTIONS} />);
    const input = combobox.getByTestId('react-gears-combobox-input');
    input.focus();

    let option = combobox.getByText('D-O');
    fireEvent.mouseDown(option);

    input.focus();

    const sandbox = sinon.createSandbox();
    sandbox.spy(input, 'blur');

    option = combobox.getByText('D-O');
    fireEvent.mouseDown(option);

    assert(input.blur.calledOnce);

    sandbox.restore();
  });

  it('should navigate options by up/down keys', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    assert(combobox.getByText('R2-D2').classList.contains('active'));

    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });

    assert(combobox.getByText('BB8').classList.contains('active'));
    assert(!combobox.getByText('R2-D2').classList.contains('active'));

    fireEvent.keyDown(input, { key: 'ArrowUp', code: 37 });

    assert(!combobox.getByText('BB8').classList.contains('active'));
    assert(combobox.getByText('R2-D2').classList.contains('active'));
  });

  it('should support object values', () => {
    const combobox = render(
      <Combobox
        options={[
          { label: 'foo', value: { id: 1 } },
          { label: 'bar', value: { id: 2 } },
        ]}
        value={{ id: 2 }}
      />
    );

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.click(input);

    assert.strictEqual(input.value, 'bar');
  });

  it('should select an option using the enter key', () => {
    const mockOnChange = sinon.spy();
    const combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });

    assert(combobox.getByText('BB8').classList.contains('active'));

    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );
    sinon.assert.called(mockOnChange);
    sinon.assert.calledWith(mockOnChange, OPTIONS[1].value);
  });

  it('should deselect option on backspace', () => {
    let value;
    const mockOnChange = (v) => {
      value = v;
    };
    let combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} value={value} />);
    let input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    const option = combobox.getByText('D-O');
    fireEvent.mouseDown(option);

    assert.equal(OPTIONS[2].value, value);

    cleanup();
    combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} value={value} />);
    input = combobox.getByTestId('react-gears-combobox-input');

    fireEvent.mouseDown(input);
    fireEvent.keyDown(input, { key: 'Backspace', code: 8 });

    assert.equal(undefined, value);
  });

  it('should open options with down key', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );

    const caret = combobox.getByTestId('react-gears-combobox-caret');
    fireEvent.mouseDown(caret);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );

    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );
  });

  it('should open options if input is clicked', async () => {
    const combobox = render(<Combobox options={OPTIONS} value={3} />);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.mouseDown(input);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );
  });

  it('should open/close options with dropdown toggle', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );

    const caret = combobox.getByTestId('react-gears-combobox-caret');
    fireEvent.mouseDown(caret);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'true'
    );

    fireEvent.mouseDown(caret);

    assert.equal(
      combobox.getByTestId('react-gears-combobox-menu').getAttribute('aria-hidden'),
      'false'
    );
  });

  describe('default filterOptions ', () => {
    it('should filter by input (case insensitive)', () => {
      const combobox = render(<Combobox options={OPTIONS} />);

      const input = combobox.getByTestId('react-gears-combobox-input');
      fireEvent.focus(input);

      fireEvent.change(input, { target: { value: 'bb8' } });

      assert(combobox.queryByText('D-O').classList.contains('visually-hidden'));
      assert(combobox.getByText('BB8').classList.contains('active'));
    });

    it('should update filtered options when input is updated', () => {
      const combobox = render(<Combobox options={OPTIONS} />);

      const input = combobox.getByTestId('react-gears-combobox-input');
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'd2' } });

      assert(combobox.queryByText('D-O').classList.contains('visually-hidden'));
      assert(combobox.getByText('R2-D2'));

      fireEvent.change(input, { target: { value: 'd' } });

      assert(combobox.getByText('D-O'));
      assert(combobox.getByText('R2-D2'));
    });
  });

  it('should support grouped options', () => {
    const groupedOptions = [
      { label: 'Droids', options: OPTIONS },
      {
        label: 'Ships',
        options: [
          { label: 'X-Wing', value: 'xwing' },
          { label: 'Millenium Falcon', value: 'falcon' },
        ],
      },
    ];

    const combobox = render(<Combobox options={groupedOptions} />);

    const input = combobox.getByTestId('react-gears-combobox-input');
    fireEvent.focus(input);

    const droidLabel = combobox.getByText('Droids');
    assert(droidLabel.classList.contains('dropdown-header'));

    groupedOptions[0].options.forEach(async (o) => {
      await combobox.findByText(o.label);
    });

    const shipsLabel = combobox.getByText('Ships');
    assert(shipsLabel.classList.contains('dropdown-header'));

    groupedOptions[1].options.forEach(async (o) => {
      await combobox.findByText(o.label);
    });
  });

  describe('creatable options', () => {
    it('should support creating options', () => {
      const mockOnChange = sinon.spy();

      const onCreateObj = { onCreate: (s) => s };
      const mockOnCreate = sinon.spy(onCreateObj, 'onCreate');

      const combobox = render(
        <Combobox options={OPTIONS} onChange={mockOnChange} onCreate={mockOnCreate} />
      );

      const input = combobox.getByTestId('react-gears-combobox-input');
      fireEvent.focus(input);

      userEvent.type(input, 'new option');
      userEvent.keyboard('[Enter]');

      sinon.assert.calledWith(mockOnCreate, 'new option');
      sinon.assert.calledWith(mockOnChange, 'new option');
    });

    it('should validate creatable options', () => {
      const mockOnChange = sinon.spy();

      const onCreateObj = { onCreate: (s) => s };
      const mockOnCreate = sinon.spy(onCreateObj, 'onCreate');

      const combobox = render(
        <Combobox
          options={OPTIONS}
          onChange={mockOnChange}
          onCreate={mockOnCreate}
          isValidNewOption={(s) => s === 'foobar'}
        />
      );

      const input = combobox.getByTestId('react-gears-combobox-input');

      userEvent.type(input, 'new option');

      let newOptionButton = combobox.getByTestId('react-gears-combobox-create-new-option');

      assert(newOptionButton.hasAttribute('disabled'));

      input.setSelectionRange(0, 'new option'.length);
      userEvent.type(input, 'foobar');

      newOptionButton = combobox.getByTestId('react-gears-combobox-create-new-option');

      assert(!newOptionButton.hasAttribute('disabled'));
    });
  });

  describe('multiselect', () => {
    it('should render multiple values as buttons to remove the option', () => {
      const combobox = render(<Combobox options={OPTIONS} value={[1, 2]} multi />);

      combobox.getByLabelText(`Remove option: ${OPTIONS[0].value}`);
      combobox.getByLabelText(`Remove option: ${OPTIONS[1].value}`);
    });

    it('should remove last selected option if input is empty and backspace is pressed', () => {
      let value;
      const mockOnChange = (v) => {
        value = v;
      };
      let combobox = render(
        <Combobox options={OPTIONS} onChange={mockOnChange} value={value} multi />
      );
      let input = combobox.getByTestId('react-gears-combobox-input');
      fireEvent.focus(input);

      const option1 = combobox.getByText('D-O');
      fireEvent.mouseDown(option1);

      cleanup();
      combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} value={value} multi />);

      const option2 = combobox.getByText('BB8');
      fireEvent.mouseDown(option2);

      assert.deepStrictEqual(value, [OPTIONS[2].value, OPTIONS[1].value]);

      cleanup();
      combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} value={value} multi />);
      input = combobox.getByTestId('react-gears-combobox-input');

      fireEvent.keyDown(input, { key: 'Backspace', code: 8 });

      assert.deepStrictEqual(value, [OPTIONS[2].value]);
    });

    it('should remove option if option badge is clicked', () => {
      let value = [1, 2];
      const mockOnChange = (v) => {
        value = v;
      };
      const combobox = render(
        <Combobox options={OPTIONS} value={value} onChange={mockOnChange} multi />
      );

      const removeOptionButton = combobox.getByLabelText(`Remove option: ${OPTIONS[0].value}`);
      fireEvent.click(removeOptionButton);

      assert.deepStrictEqual(value, [2]);
    });

    it('should be able to remove remove all options', () => {
      let value = [1, 2];
      const mockOnChange = (v) => {
        value = v;
      };
      const combobox = render(
        <Combobox options={OPTIONS} value={value} onChange={mockOnChange} multi />
      );

      const removeOptionButton = combobox.getByLabelText('Remove all selected options');
      fireEvent.click(removeOptionButton);

      assert.deepStrictEqual(value, []);
    });
  });
});
