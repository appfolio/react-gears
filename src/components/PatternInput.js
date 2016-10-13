import React from 'react';
import { Input } from 'reactstrap';

function restrictKeystrokeTo(e, pattern) {
  if (!pattern.exec(String.fromCharCode(e.charCode))) {
    e.preventDefault();
  }
}

const PatternInput = ({ pattern, ...props }) => (
  <Input {...props} onKeyPress={pattern ? e => restrictKeystrokeTo(e, pattern) : null} />
);

export default PatternInput;
