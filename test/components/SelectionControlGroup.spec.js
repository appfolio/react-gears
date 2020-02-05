import React from 'react';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';

import SelectionControlGroup from '../../src/components/SelectionControlGroup';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

describe('<SelectionControlGroup />', () => {
  afterEach(cleanup);

  describe('Checkboxes', () => {
    it('should select option', () => {
      const mockOnChange = sinon.spy();
      const checkboxes = render(
        <SelectionControlGroup options={options} selected={new Set(['apple'])} onChange={mockOnChange} />
      );

      const option = checkboxes.getByLabelText('Orange');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, new Set(['apple', 'orange']));
    });

    it('should deselect option', () => {
      const mockOnChange = sinon.spy();
      const checkboxes = render(
        <SelectionControlGroup options={options} selected={new Set(['apple', 'lemon'])} onChange={mockOnChange} />
      );

      const option = checkboxes.getByLabelText('Apple');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, new Set(['lemon']));
    });
  });

  describe('Radio buttons', () => {
    it('should select only one option', () => {
      const mockOnChange = sinon.spy();
      const checkboxes = render(
        <SelectionControlGroup radio options={options} onChange={mockOnChange} />
      );

      let option = checkboxes.getByLabelText('Apple');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, 'apple');

      option = checkboxes.getByLabelText('Watermelon');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, 'watermelon');
    });
  });

  it('should work with object values', () => {
    const coolerOptions = [
      { label: 'Boba', value: { id: 1, type: 'topping', price: '0.50' } },
      { label: 'Aiyu Jelly', value: { id: 2, type: 'topping', price: '0.50' } },
      { label: 'Konjac Pearls', value: { id: 3, type: 'topping', price: '0.50' } },
    ];
    const mockOnChange = sinon.spy();
    const checkboxes = render(
      <SelectionControlGroup options={coolerOptions} selected={new Set([{ id: 1, type: 'topping', price: '0.50' }])} onChange={mockOnChange} />
    );

    const option = checkboxes.getByLabelText('Aiyu Jelly');
    fireEvent.click(option);

    sinon.assert.calledWith(
      mockOnChange,
      new Set([{ id: 1, type: 'topping', price: '0.50' }, { id: 2, type: 'topping', price: '0.50' }])
    );
  });
});
