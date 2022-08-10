import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  describe('by default', () => {
    let target;
    beforeEach(() => {
      target = document.createElement('div');
      target.id = 'foo';
      document.body.appendChild(target);
    });

    afterEach(() => {
      document.body.removeChild(target);
    });

    it('should be closed by default', () => {
      const { queryByRole } = render(
        <Tooltip placement="right" target="foo">
          Hello World
        </Tooltip>
      );

      expect(queryByRole('tooltip')).toBeNull();
    });

    it('can be open initially', () => {
      const { queryByRole } = render(
        <Tooltip placement="right" target="foo" isOpen>
          Hello World
        </Tooltip>
      );

      expect(queryByRole('tooltip')).not.toBeNull();
    });

    it('should toggle state', async () => {
      const { queryByRole } = render(
        <Tooltip placement="right" target="foo">
          Hello World
        </Tooltip>
      );

      expect(queryByRole('tooltip')).toBeNull();

      userEvent.hover(target);
      await waitFor(() => expect(queryByRole('tooltip')).not.toBeNull());

      userEvent.unhover(target);
      await waitFor(() => expect(queryByRole('tooltip')).toBeNull());
    });
  });
});
