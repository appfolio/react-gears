import React from 'react';
import { Tag } from 'reactstrap';

const Flag = (props) => (
  <Tag color={props.color}>{props.children}</Tag>
);

Flag.PropTypes = {
  color: React.PropTypes.string
};

export default Flag;
