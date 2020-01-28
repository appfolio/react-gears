import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import Combobox from '../../src/components/Combobox';

const OPTIONS = [
  { label: 'R2-D2', value: 1 },
  { label: 'BB8', value: 2 },
  { label: 'D-O', value: 3 },
  { label: 'CP3O', value: 4 }
];

describe('<Combobox />', () => {
  afterEach(cleanup);

  it('should show options when focused', () => {
    const combobox = render(<Combobox options={OPTIONS} />);
    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'true');

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'false');
  });

  it('should call onChange when value changes', () => {
    const mockOnChange = sinon.spy();
    const combobox = render(<Combobox options={OPTIONS} onChange={mockOnChange} />);

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);

    const option = combobox.getByText('D-O');
    fireEvent.mouseDown(option);

    sinon.assert.called(mockOnChange);
    sinon.assert.calledWith(mockOnChange, OPTIONS[2].value);
  });

  it('should close menu on blur', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'false');

    fireEvent.blur(input);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'true');
  });

  it('should navigate options by up/down keys', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);

    assert(combobox.getByText('R2-D2').classList.contains('active'));

    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });

    assert(combobox.getByText('BB8').classList.contains('active'));
    assert(!combobox.getByText('R2-D2').classList.contains('active'));

    fireEvent.keyDown(input, { key: 'ArrowUp', code: 37 });

    assert(!combobox.getByText('BB8').classList.contains('active'));
    assert(combobox.getByText('R2-D2').classList.contains('active'));
  });

  it('should select an option using the enter key', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });

    assert(combobox.getByText('BB8').classList.contains('active'));

    fireEvent.keyDown(input, { key: 'Enter', code: 13 });

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'true');
    assert.equal(combobox.getByTestId('combobox-input').getAttribute('value'), 'BB8');
  });

  it('should open options with down key', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'false');

    const caret = combobox.getByTestId('combobox-caret');
    fireEvent.mouseDown(caret);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'true');

    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'false');
  });

  it('should open/close options with dropdown toggle', () => {
    const combobox = render(<Combobox options={OPTIONS} />);

    const input = combobox.getByTestId('combobox-input');
    fireEvent.focus(input);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'false');

    const caret = combobox.getByTestId('combobox-caret');
    fireEvent.mouseDown(caret);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'true');

    fireEvent.mouseDown(caret);

    assert.equal(combobox.getByTestId('combobox-menu').getAttribute('aria-hidden'), 'false');
  });

  describe('default filterOptions ', () => {
    it('should filter by input (case insensitive)', () => {
      const combobox = render(<Combobox options={OPTIONS} />);

      const input = combobox.getByTestId('combobox-input');
      fireEvent.focus(input);

      fireEvent.change(input, { target: { value: 'bb8' } });

      assert.equal(combobox.queryByText('D-O'), undefined);
      assert(combobox.getByText('BB8').classList.contains('active'));
    });
  });
});
