import React, { PropTypes } from 'react';
import { Tag } from 'reactstrap';

const Flag = (props) => <Tag {...props} />;

const propTypes = {
  color: PropTypes.string,
  cssModule: PropTypes.object,
};

Flag.propTypes = propTypes;

export default Flag;
