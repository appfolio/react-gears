import React from 'react';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';

import CheckGroup from '../../src/components/CheckGroup';

const options = [
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Apple', value: 'apple' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
];

describe('<CheckGroup />', () => {
  afterEach(cleanup);

  describe('Checkboxes', () => {
    it('should select option', () => {
      const mockOnChange = sinon.spy();
      const checkboxes = render(
        <CheckGroup options={options} selected={new Set(['apple'])} onChange={mockOnChange} />
      );

      const option = checkboxes.getByLabelText('Orange');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, new Set(['apple', 'orange']));
    });

    it('should deselect option', () => {
      const mockOnChange = sinon.spy();
      const checkboxes = render(
        <CheckGroup options={options} selected={new Set(['apple', 'lemon'])} onChange={mockOnChange} />
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
        <CheckGroup radio options={options} onChange={mockOnChange} />
      );

      let option = checkboxes.getByLabelText('Apple');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, 'apple');

      option = checkboxes.getByLabelText('Watermelon');
      fireEvent.click(option);

      sinon.assert.calledWith(mockOnChange, 'watermelon');
    });
  });
});
