import assert from 'assert';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    render(
      <RadioGroup
        options={coolerOptions}
        selected={{ id: 1, type: 'topping', price: '0.50' }}
        onChange={mockOnChange}
      />
    );

    const option = screen.getByLabelText('Aiyu Jelly');
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

    render(
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

    const opts = screen.getAllByLabelText('Aiyu Jelly');
    assert.strictEqual(opts.length, 2);

    fireEvent.click(opts[0]);

    sinon.assert.calledWith(mockOnChange1, { id: 2, type: 'topping', price: '0.50' });

    fireEvent.click(opts[1]);

    sinon.assert.calledWith(mockOnChange2, { id: 2, type: 'topping', price: '0.50' });
  });

  it('should tab to next group', async () => {
    const firstOptions = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
    ];
    const secondOptions = [
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
    ];
    const mockOnChange = sinon.spy();

    render(
      <>
        <RadioGroup options={firstOptions} onChange={mockOnChange} name="group1" />
        <RadioGroup options={secondOptions} onChange={mockOnChange} name="group2" />
        <button type="button">Should not be focused</button>
      </>
    );

    await userEvent.tab();
    sinon.assert.match(document.activeElement.name, 'group1');
    await userEvent.tab();
    sinon.assert.match(document.activeElement.name, 'group2');
  });
});
