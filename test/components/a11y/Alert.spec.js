import assert from 'assert';
import axe from 'axe-core';
import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { Alert } from '../../../src';

describe('Alert', () => {
  afterEach(cleanup);

  it('is accessible', async () => {
    const { container } = render(
      <Alert dismissible icon>
        Stuff Here
      </Alert>
    );
    const { violations } = await axe.run(container);
    assert.deepStrictEqual(violations, []);
  });
});
