import assert from 'assert';
import axe from 'axe-core';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';


export async function assertAccessibleContainer(container: axe.ElementContext) {
  const { violations } = await axe.run(container);
  assert.deepStrictEqual(violations, []);
}

export async function assertAccessible(element: ReactElement) {
  const { container } = render(element);
  await assertAccessibleContainer(container);
}
