import assert from 'assert';
import axe from 'axe-core';
import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { AddressInput } from '../../../src';

describe('AddressInput', () => {
  afterEach(cleanup);

  it('is accessible', async () => {
    const { container } = render(
      <AddressInput
        defaultValue={{
          address1: 'Wayne Enterprises',
          address2: '1007 Mountain Drive',
          city: 'Gotham',
          state: 'NJ',
          postal: '07001',
          countryCode: 'US',
        }}
      />
    );
    const { violations } = await axe.run(container);
    assert.deepStrictEqual(violations, []);
  });
});
