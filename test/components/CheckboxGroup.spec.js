import React from 'react';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';

import CheckboxGroup from '../../src/components/CheckboxGroup';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

describe('<CheckboxGroup />', () => {
  afterEach(cleanup);

  it('should select option', () => {
    const mockOnChange = sinon.spy();
    const checkboxes = render(
      <CheckboxGroup options={options} selected={['apple']} onChange={mockOnChange} />
    );

    const option = checkboxes.getByLabelText('Orange');
    fireEvent.click(option);

    sinon.assert.calledWith(mockOnChange, ['apple', 'orange']);
  });

  it('should deselect option', () => {
    const mockOnChange = sinon.spy();
    const checkboxes = render(
      <CheckboxGroup options={options} selected={['apple', 'lemon']} onChange={mockOnChange} />
    );

    const option = checkboxes.getByLabelText('Apple');
    fireEvent.click(option);

    sinon.assert.calledWith(mockOnChange, ['lemon']);
  });

  it('should work with object values', () => {
    const coolerOptions = [
      { label: 'Boba', value: { id: 1, type: 'topping', price: '0.50' } },
      { label: 'Aiyu Jelly', value: { id: 2, type: 'topping', price: '0.50' } },
      { label: 'Konjac Pearls', value: { id: 3, type: 'topping', price: '0.50' } },
    ];
    const mockOnChange = sinon.spy();
    const checkboxes = render(
      <CheckboxGroup options={coolerOptions} selected={[{ id: 1, type: 'topping', price: '0.50' }]} onChange={mockOnChange} />
    );

    const option = checkboxes.getByLabelText('Aiyu Jelly');
    fireEvent.click(option);

    sinon.assert.calledWith(
      mockOnChange,
      [{ id: 1, type: 'topping', price: '0.50' }, { id: 2, type: 'topping', price: '0.50' }]
    );
  });
});
