import React from 'react';

const Datapair = (props) => (
  <div className="datapair">
    <span>{props.label}</span>
    <div>{props.children || props.value}</div>
  </div>
);

Datapair.PropTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string
}

export default Datapair;
