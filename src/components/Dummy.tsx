import React, { useState, useEffect } from 'react';

export interface DummyProps<T> {
  name: string;
  expanded: T | T[];
}

function makeArr<T>(thing: T | T[]) {
  return Array.isArray(thing) ? thing : [thing];
}

function Dummy<T>({ name, expanded }: DummyProps<T>) {
  const [expandedInternal, setExpandedInternal] = useState(makeArr(expanded));
  useEffect(() => {
    setExpandedInternal(makeArr(expanded));
  }, [expanded]);

  return (
    <>
      <h1>Your name is {name}</h1>
      <h2>There are {expandedInternal.length}</h2>
    </>
  );
}

export default Dummy;
