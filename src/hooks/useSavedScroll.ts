import { RefObject, useEffect, useLayoutEffect } from 'react';
import { useSessionStorage, useScroll } from 'react-use';
import { v4 as uuidv4 } from 'uuid';

function useSavedScroll(container: HTMLInputElement, key: string) {
  const [position, setPosition] = useSessionStorage(key);
  const scrollPosition = useScroll(container);

  useEffect(() => {
    if (key) setPosition(scrollPosition);
  }, [key, scrollPosition, setPosition]);

  useLayoutEffect(() => {
    if (container.current && position && key) {
      container.current.scrollTo(position.x, position.y);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, key]);
}

export default useSavedScroll;

