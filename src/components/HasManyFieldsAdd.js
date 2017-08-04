import classNames from 'classnames';
import React from 'react';
import { Button } from 'reactstrap';

import Icon from './Icon';

const HasManyFieldsAdd = ({ children, className, ...props }) => {
  const classes = classNames('w-100', className);

  return (
    <Button color="success" {...props} className={classes}>
      <Icon name="plus-circle" className="mr-2" />
      <span children={children} />
    </Button>
  );
};

HasManyFieldsAdd.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool
};

export default HasManyFieldsAdd;
