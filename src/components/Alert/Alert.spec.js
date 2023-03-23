import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { assertAccessible } from '../../tooling/a11yHelpers';
import Alert from './Alert';

describe('<Alert />', () => {
  describe('default', () => {
    beforeEach(() => {
      render(<Alert />);
    });

    it('should be accessible', async () => {
      await assertAccessible(<Alert />);
    });

    it('should not be dismissible', () => {
      expect(() => screen.getByRole('button')).toThrowError();
    });

    it('should have a default color of "warning"', () => {
      expect(screen.getByRole('alert')).toHaveClass('alert-warning');
    });
  });

  describe('with icon', () => {
    it('should have property icon css class', () => {
      render(<Alert icon color="warning" />);
      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('alert--with-icon');
    });
  });

  describe('when dismissible', () => {
    it('should be accessible', async () => {
      await assertAccessible(<Alert dismissible />);
    });

    it('should toggle state when clicked', async () => {
      render(<Alert dismissible />);
      const alert = screen.getByRole('alert');

      expect(alert).toBeVisible();
      userEvent.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(alert).not.toBeVisible();
      });
    });

    it('should become visible when receiving new props', async () => {
      const Wrapper = () => {
        const [color, setColor] = useState('warning');
        return (
          <>
            <button type="button" onClick={() => setColor('danger')}>
              Change to Danger
            </button>
            <Alert dismissible color={color} />
          </>
        );
      };
      render(<Wrapper />);
      const alert = screen.getByRole('alert');
      expect(alert).toBeVisible();
      userEvent.click(screen.getByLabelText('Close'));

      await waitFor(async () => {
        expect(alert).not.toBeVisible();
      });
      userEvent.click(screen.getByText('Change to Danger'));
      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeVisible();
      });
    });

    it('should call onToggle if provided', () => {
      const onToggleMock = jest.fn();
      render(<Alert dismissible onToggle={onToggleMock} />);
      userEvent.click(screen.getByRole('button'));

      expect(onToggleMock).toHaveBeenCalledTimes(1);
      expect(onToggleMock).toHaveBeenCalledWith(false);
    });
  });
});
