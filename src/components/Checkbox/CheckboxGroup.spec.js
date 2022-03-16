import { render, cleanup, fireEvent } from '@testing-library/react';
import assert from 'assert';
import React from 'react';
import sinon from 'sinon';
import CheckboxGroup from './CheckboxGroup';

describe('<CheckboxGroup />', () => {
  let options;

  beforeEach(() => {
    options = [
      { label: 'Watermelon', value: 'watermelon' },
      { label: 'Apple', value: 'apple' },
      { label: 'Lemon', value: 'lemon' },
      { label: 'Orange', value: 'orange' },
      { label: 'Grape', value: 'grape' },
    ];
  });

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

  it('should select option', () => {
    options = [{ label: 'Watermelon', value: 'watermelon', disabled: true }];
    const checkboxes = render(
      <CheckboxGroup options={options} selected={[]} onChange={jest.fn()} />
    );

    const option = checkboxes.getByLabelText('Watermelon');
    expect(option.disabled).toEqual(true);
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
      <CheckboxGroup
        options={coolerOptions}
        selected={[{ id: 1, type: 'topping', price: '0.50' }]}
        onChange={mockOnChange}
      />
    );

    const option = checkboxes.getByLabelText('Aiyu Jelly');
    fireEvent.click(option);

    sinon.assert.calledWith(mockOnChange, [
      { id: 1, type: 'topping', price: '0.50' },
      { id: 2, type: 'topping', price: '0.50' },
    ]);
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
          <CheckboxGroup
            options={coolerOptions}
            selected={[{ id: 1, type: 'topping', price: '0.50' }]}
            onChange={mockOnChange1}
          />
        </div>
        <div>
          Jade Lemon
          <CheckboxGroup options={coolerOptions} selected={[]} onChange={mockOnChange2} />
        </div>
      </div>
    );

    const opts = checkboxes.getAllByLabelText('Aiyu Jelly');
    assert.strictEqual(opts.length, 2);

    fireEvent.click(opts[0]);

    sinon.assert.calledWith(mockOnChange1, [
      { id: 1, type: 'topping', price: '0.50' },
      { id: 2, type: 'topping', price: '0.50' },
    ]);

    fireEvent.click(opts[1]);

    sinon.assert.calledWith(mockOnChange2, [{ id: 2, type: 'topping', price: '0.50' }]);
  });
});
