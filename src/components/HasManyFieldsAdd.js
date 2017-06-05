import React from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import Icon from './Icon';

const HasManyFieldsAdd = ({ children, outline, color, className, ...props }) => {
  const classes = classNames('w-100 rounded-0', className);

  return (
    <Button outline color="success" {...props} className={classes}>
      <Icon name="plus-circle" className="mr-2" />
      <span children={children} />
    </Button>
  );
}

HasManyFieldsAdd.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default HasManyFieldsAdd;
