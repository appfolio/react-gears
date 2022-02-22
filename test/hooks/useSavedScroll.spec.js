import { useRef } from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { replaceRaf } from 'raf-stub';
import { renderHook, act } from '@testing-library/react-hooks';
import useSavedScroll from '../../src/hooks/useSavedScroll';

const mockedPosition = { x: 10, y: 12 };
const mockSetPosition = jest.fn();

jest.mock('react-use', () => {
  return {
    ...jest.requireActual('react-use'),
    useSessionStorage: jest.fn(() => [mockedPosition, mockSetPosition]),
  };
});

describe('useSavedScroll', () => {
  let div;

  const triggerScroll = (dimension, value) => {
    if (dimension === 'x') {
      div.scrollLeft = value;
    } else if (dimension === 'y') {
      div.scrollTop = value;
    }

    div.dispatchEvent(new Event('scroll'));
  };

  beforeAll(() => {
    replaceRaf();
  });

  beforeEach(() => {
    div = document.createElement('div');
    div.scrollTo = jest.fn();
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
    requestAnimationFrame.reset();
    jest.clearAllMocks();
  });

  it('should initialize to saved scroll position', () => {
    const {
      result: { current: container },
    } = renderHook(() => useRef(div));
    const scrollToSpy = sinon.spy(container.current, 'scrollTo');
    renderHook(() => useSavedScroll(container, 'positionKey'));

    sinon.assert.calledWith(scrollToSpy, mockedPosition.x, mockedPosition.y);
  });

  it('should update saved position when scroll position changes', () => {
    const {
      result: { current: container },
    } = renderHook(() => useRef(div));
    renderHook(() => useSavedScroll(container, 'positionKey'));

    act(() => {
      triggerScroll('x', 100);
      triggerScroll('y', 120);

      requestAnimationFrame.step();
    });

    assert.deepStrictEqual(mockSetPosition.mock.calls[1][0], {
      x: 100,
      y: 120,
    });
  });
});
