import React, { useRef } from 'react';
import sinon from 'sinon';
import * as ReactUse from 'react-use';
import { renderHook } from '@testing-library/react-hooks';
import useSavedScroll from '../../src/hooks/useSavedScroll';

describe('useSavedScroll', () => {
  let div;

  beforeEach(() => {
    div = document.createElement('div');
    div.scrollTo = jest.fn();
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it('should initialize to saved scroll position', () => {
    const savedPos = { x: 10, y: 12 };
    sinon.stub(ReactUse, 'useSessionStorage').callsFake(() => [savedPos, () => {}]);

    const { result: { current: container } } = renderHook(() => useRef(div));
    const scrollToSpy = sinon.spy(container.current, 'scrollTo');
    renderHook(() => useSavedScroll(container, 'positionKey'));

    sinon.assert.calledWith(scrollToSpy, savedPos);
  });

  it('should update saved position when scroll position changes', () => {

  });
});
