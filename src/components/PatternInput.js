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

PatternInput.propTypes = {
  pattern: React.PropTypes.object
}

export default PatternInput;
