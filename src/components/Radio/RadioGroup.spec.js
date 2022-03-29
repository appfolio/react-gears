import assert from 'assert';
import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import sinon from 'sinon';
import RadioGroup from './RadioGroup';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

describe('<RadioGroup />', () => {
  afterEach(cleanup);

  it('should select only one option', () => {
    const mockOnChange = sinon.spy();
    const checkboxes = render(<RadioGroup options={options} onChange={mockOnChange} />);

    let option = checkboxes.getByLabelText('Apple');
    fireEvent.click(option);

    sinon.assert.calledWith(mockOnChange, 'apple');

    option = checkboxes.getByLabelText('Watermelon');
    fireEvent.click(option);

    sinon.assert.calledWith(mockOnChange, 'watermelon');
  });

  it('should work with object values', () => {
    const coolerOptions = [
      { label: 'Boba', value: { id: 1, type: 'topping', price: '0.50' } },
      { label: 'Aiyu Jelly', value: { id: 2, type: 'topping', price: '0.50' } },
      { label: 'Konjac Pearls', value: { id: 3, type: 'topping', price: '0.50' } },
    ];
    const mockOnChange = sinon.spy();
    const checkboxes = render(
      <RadioGroup
        options={coolerOptions}
        selected={{ id: 1, type: 'topping', price: '0.50' }}
        onChange={mockOnChange}
      />
    );

    const option = checkboxes.getByLabelText('Aiyu Jelly');
    fireEvent.click(option);

    sinon.assert.calledWith(mockOnChange, { id: 2, type: 'topping', price: '0.50' });
  });

  it('should work with duplicate groups', () => {
    const coolerOptions = [
      { label: 'Boba', value: { id: 1, type: 'topping', price: '0.50' } },
      { label: 'Aiyu Jelly', value: { id: 2, type: 'topping', price: '0.50' } },
      { label: 'Konjac Pearls', value: { id: 3, type: 'topping', price: '0.50' } },
    ];
    const mockOnChange1 = sinon.spy();
    const mockOnChange2 = sinon.spy();
    const checkboxes = render(
      <div>
        <div>
          Peach Green Tea
          <RadioGroup
            options={coolerOptions}
            selected={{ id: 1, type: 'topping', price: '0.50' }}
            onChange={mockOnChange1}
          />
        </div>
        <div>
          Jade Lemon
          <RadioGroup
            options={coolerOptions}
            selected={{ id: 1, type: 'topping', price: '0.50' }}
            onChange={mockOnChange2}
          />
        </div>
      </div>
    );

    const opts = checkboxes.getAllByLabelText('Aiyu Jelly');
    assert.strictEqual(opts.length, 2);

    fireEvent.click(opts[0]);

    sinon.assert.calledWith(mockOnChange1, { id: 2, type: 'topping', price: '0.50' });

    fireEvent.click(opts[1]);

    sinon.assert.calledWith(mockOnChange2, { id: 2, type: 'topping', price: '0.50' });
  });
});
