import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const HasManyFieldsAdd = ({ children, className, ...props }) => {
  const classes = classNames('border-0', className);

  return (
    <Button color="success" block outline {...props} className={classes}>
      <Icon name="circle-plus" className="me-2" />
      <span>{children}</span>
    </Button>
  );
};

HasManyFieldsAdd.displayName = 'HasManyFieldsAdd';

export default HasManyFieldsAdd;
