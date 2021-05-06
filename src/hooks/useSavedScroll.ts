import { RefObject, useEffect, useLayoutEffect } from 'react';
import { useSessionStorage, useScroll } from 'react-use';
import { v4 as uuidv4 } from 'uuid';

type Position = {
  x: number,
  y: number
};

function useSavedScroll(container: RefObject<HTMLElement>, key: string | undefined) {
  const [position, setPosition] = useSessionStorage<Position>(key || uuidv4());
  const scrollPosition = useScroll(container);

  console.log(`position: ${JSON.stringify(position)}`);
  useEffect(() => {
    if (key) setPosition(scrollPosition);
  }, [key, scrollPosition, setPosition]);

  useLayoutEffect(() => {
    if (container.current && position && key) {
      console.log(`position: ${JSON.stringify(position)}`);
      container.current.scrollTo(position.x, position.y);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, key]);
}

export default useSavedScroll;

